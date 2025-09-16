import React, { useState } from 'react';
import Header from './components/Header';
import ActionSection from './components/ActionSection';
import LoadingSection from './components/LoadingSection';
import ResultsSection from './components/ResultsSection';
import FeaturesSection from './components/FeaturesSection';
import { fetchMarketAnalysis } from './services/geminiService';
import type { AnalysisResult } from './types';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleAnalysis = async () => {
        setIsLoading(true);
        setAnalysisResult(null);
        setError(null);
        try {
            const result = await fetchMarketAnalysis();
            setAnalysisResult(result);
        } catch (err) {
            setError('Failed to fetch market analysis. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="subtle-pattern min-h-screen font-sans">
            <Header />
            <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:py-12">
                <ActionSection onAnalyze={handleAnalysis} isLoading={isLoading} />
                {isLoading && <LoadingSection />}
                {error && (
                     <div className="my-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-center text-sm md:text-base" role="alert">
                        <strong className="font-bold">Error: </strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
                {analysisResult && <ResultsSection result={analysisResult} />}
                {!analysisResult && !isLoading && <FeaturesSection />}
            </main>
        </div>
    );
};

export default App;
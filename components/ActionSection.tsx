import React from 'react';
import { CompassIcon, ZapIcon } from './icons/Icons';

interface ActionSectionProps {
    onAnalyze: () => void;
    isLoading: boolean;
}

const ActionSection: React.FC<ActionSectionProps> = ({ onAnalyze, isLoading }) => {
    return (
        <section className="text-center mb-12">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-amber-300 card-pattern">
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-6 shadow-lg">
                        <CompassIcon className="h-8 w-8 sm:h-10 sm:h-10 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Real-Time Market Analysis</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Get comprehensive XAUUSD market sentiment analysis with data from multiple financial sources, 
                        economic indicators, and beginner-friendly explanations.
                    </p>
                </div>
                
                <button 
                    onClick={onAnalyze}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center text-center gap-3 py-3 px-4 sm:px-6 md:py-4 md:px-8 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-white text-base md:text-lg font-semibold rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isLoading ? <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : <ZapIcon className="h-6 w-6" />}
                    <span className="sm:hidden">{isLoading ? 'Analyzing...' : 'Get Latest Update'}</span>
                    <span className="hidden sm:inline">{isLoading ? 'Analyzing...' : 'Get the Latest Fundamental Update on Gold'}</span>
                </button>
            </div>
        </section>
    );
};

export default ActionSection;
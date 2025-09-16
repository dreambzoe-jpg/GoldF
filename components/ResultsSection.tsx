import React from 'react';
import type { AnalysisResult } from '../types';
import { Sentiment } from '../types';
import { DollarSignIcon, TrendingUpIcon, TrendingDownIcon, MinusIcon, CompassIcon, ClockIcon, DocumentTextIcon } from './icons/Icons';

interface ResultsSectionProps {
    result: AnalysisResult;
}

const MetricCard: React.FC<{
    icon: React.ReactNode;
    value: string | number;
    label: string;
    bgColorClass: string;
    borderColorClass: string;
    iconColorClass: string;
}> = ({ icon, value, label, bgColorClass, borderColorClass, iconColorClass }) => (
    <div className={`rounded-xl p-4 sm:p-6 text-center border ${borderColorClass} ${bgColorClass}`}>
        <div className={`mx-auto mb-3 h-8 w-8 ${iconColorClass}`}>
            {icon}
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{value}</div>
        <div className="text-xs md:text-sm font-medium text-gray-500">{label}</div>
    </div>
);

const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) => {
    const isPositive = result.change > 0;
    const isNegative = result.change < 0;

    const getChangeCardClasses = () => {
        if (isPositive) return { bg: 'bg-green-50', border: 'border-green-300', iconColor: 'text-green-600' };
        if (isNegative) return { bg: 'bg-red-50', border: 'border-red-300', iconColor: 'text-red-600' };
        return { bg: 'bg-gray-100', border: 'border-gray-300', iconColor: 'text-gray-600' };
    };
    
    const getSentimentCardClasses = () => {
        switch (result.sentiment) {
            case Sentiment.BULLISH: return { bg: 'bg-green-50', border: 'border-green-300', iconColor: 'text-green-600' };
            case Sentiment.BEARISH: return { bg: 'bg-red-50', border: 'border-red-300', iconColor: 'text-red-600' };
            default: return { bg: 'bg-amber-50', border: 'border-amber-300', iconColor: 'text-amber-600' };
        }
    };
    
    const changeClasses = getChangeCardClasses();
    const sentimentClasses = getSentimentCardClasses();

    return (
        <section className="mb-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-300">
                <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-center sm:text-left">Market Analysis Results</h3>
                    <div className="flex items-center gap-2 text-amber-100 text-xs sm:text-sm">
                        <ClockIcon className="h-5 w-5" />
                        <span>{result.timestamp}</span>
                    </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        <MetricCard 
                            icon={<DollarSignIcon />}
                            value={`$${result.price.toFixed(2)}`}
                            label="Current Price (USD/oz)"
                            bgColorClass="bg-amber-50"
                            borderColorClass="border-amber-300"
                            iconColorClass="text-amber-600"
                        />
                        <MetricCard 
                            icon={isPositive ? <TrendingUpIcon /> : isNegative ? <TrendingDownIcon /> : <MinusIcon />}
                            value={`${isPositive ? '+' : ''}${result.change.toFixed(2)}`}
                            label="24h Price Change"
                            bgColorClass={changeClasses.bg}
                            borderColorClass={changeClasses.border}
                            iconColorClass={changeClasses.iconColor}
                        />
                        <MetricCard 
                            icon={<CompassIcon />}
                            value={result.sentiment}
                            label="Market Sentiment"
                            bgColorClass={sentimentClasses.bg}
                            borderColorClass={sentimentClasses.border}
                            iconColorClass={sentimentClasses.iconColor}
                        />
                    </div>
                    
                    <div className="bg-amber-50/50 rounded-lg p-4 sm:p-6 border border-amber-200 card-pattern">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <DocumentTextIcon className="h-5 w-5 sm:h-6 sm:h-6" />
                            </div>
                            Professional Market Brief
                        </h4>
                        <p className="whitespace-pre-line text-gray-700 leading-relaxed text-sm md:text-base">
                            {result.analysis}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
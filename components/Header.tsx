import React from 'react';
import { DollarSignIcon, BarChartIcon } from './icons/Icons';

const Header: React.FC = () => {
    return (
        <header className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-white shadow-2xl shimmer">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6">
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
                    <div className="p-2 bg-white/20 rounded-full">
                        <DollarSignIcon className="h-8 w-8" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">Gold Market Intelligence</h1>
                     <div className="p-2 bg-white/20 rounded-full">
                        <BarChartIcon className="h-8 w-8" />
                    </div>
                </div>
                <p className="text-center text-base md:text-lg text-amber-100">Professional XAUUSD Sentiment Analysis & Market Insights</p>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import { CompassIcon } from './icons/Icons';

const LoadingItem: React.FC<{ color: string; text: string; delay: string }> = ({ color, text, delay }) => (
    <div className={`flex items-center gap-3 p-4 rounded-lg bg-${color}-100`}>
        <div className={`w-3 h-3 rounded-full bg-${color}-500 animate-pulse`} style={{ animationDelay: delay }}></div>
        <span className={`text-${color}-800 text-sm md:text-base`}>{text}</span>
    </div>
);

const LoadingSection: React.FC = () => {
    return (
        <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-amber-300">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-6">
                        <CompassIcon className="h-7 w-7 sm:h-8 sm:h-8 text-white animate-pulse" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Gathering Market Intelligence...</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                       <LoadingItem color="amber" text="Fetching current XAUUSD prices" delay="0s" />
                       <LoadingItem color="yellow" text="Scanning financial headlines" delay="0.2s" />
                       <LoadingItem color="orange" text="Analyzing economic indicators" delay="0.4s" />
                       <LoadingItem color="amber" text="Compiling sentiment analysis" delay="0.6s" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoadingSection;
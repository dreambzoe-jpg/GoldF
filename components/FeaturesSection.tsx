import React from 'react';
import { ZapIcon, CompassIcon, BarChartIcon } from './icons/Icons';

const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    gradientClass: string;
}> = ({ icon, title, description, gradientClass }) => (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center border border-amber-300 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${gradientClass}`}>
            {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
);

const FeaturesSection: React.FC = () => {
    return (
        <section className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <FeatureCard 
                    icon={<ZapIcon className="h-7 w-7 sm:h-8 sm:h-8 text-white" />}
                    title="Real-Time Data"
                    description="Current XAUUSD prices, 24-hour changes, and live market sentiment from multiple financial sources."
                    gradientClass="bg-gradient-to-br from-yellow-400 to-amber-500"
                />
                <FeatureCard 
                    icon={<CompassIcon className="h-7 w-7 sm:h-8 sm:h-8 text-white" />}
                    title="Multi-Source Analysis"
                    description="Data aggregated from Reuters, MarketWatch, CNBC, Bloomberg, and other credible financial outlets."
                    gradientClass="bg-gradient-to-br from-amber-500 to-orange-600"
                />
                <FeatureCard 
                    icon={<BarChartIcon className="h-7 w-7 sm:h-8 sm:h-8 text-white" />}
                    title="Beginner Friendly"
                    description="Complex market dynamics explained in simple terms with clear reasoning and educational context."
                    gradientClass="bg-gradient-to-br from-orange-500 to-red-600"
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
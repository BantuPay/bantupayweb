'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LangSwitch() {
    const router = useRouter();
    const localActive = useLocale();

    // Function to toggle between languages
    const handleToggle = () => {
        const nextLocale = localActive === 'en' ? 'fr' : 'en';
        router.replace(`/${nextLocale}`);
    };

    return (
        <div className="language-toggle-switch" onClick={handleToggle}>
            {/* Toggle Switch Container */}
            <div className="toggle-container">
                {/* Left Flag (English) */}
                <div className={`flag-option left ${localActive === 'en' ? 'active' : 'inactive'}`}>
                    <span className="flag-emoji">🇺🇸</span>
                </div>
                
                {/* Toggle Slider */}
                <div className={`toggle-slider ${localActive === 'fr' ? 'slide-right' : 'slide-left'}`}></div>
                
                {/* Right Flag (French) */}
                <div className={`flag-option right ${localActive === 'fr' ? 'active' : 'inactive'}`}>
                    <span className="flag-emoji">🇫🇷</span>
                </div>
            </div>
        </div>
    );
}

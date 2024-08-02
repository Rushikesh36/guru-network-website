import { createRouter , createWebHistory } from 'vue-router';
// import store from './store';
import LandingPage from './components/LandingPage';
import BuyerPage from './components/BuyerPage';
import DeveloperPage from './components/DeveloperPage';
import ChannelPage from './components/ChannelPartners';
import PropertyGuru from './components/PropertyGuru';
import FinancialService from './components/FinancialServices';
import ThankYouPage from './components/ThankYouPage';
import DigitalParchi from './components/DigitalParchi';
import CreditsPage from './components/CreditsPage';
import MeetingPage from './components/MeetingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import PlansPage from './components/PlansPage';
import RefundPolicy from './components/RefundPolicy';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage},
        { path: '/about-us', component: LandingPage},
        { path: '/contact-us', component: LandingPage},
        { path: '/buyer', component: BuyerPage},
        { path: '/developer', component: DeveloperPage},
        { path: '/channelpartner', component: ChannelPage},
        { path: '/propertytransactionguru', component: PropertyGuru},
        { path: '/finance', component: FinancialService },
        { path: '/success', component: ThankYouPage},
        { path: '/digitalparchi', component: DigitalParchi},
        { path: '/credits', component: CreditsPage},
        { path: '/meeting', component: MeetingPage},
        { path: '/privacypolicy', component: PrivacyPolicy},
        { path: '/terms', component: TermsConditions},
        { path: '/plans', component: PlansPage},
        { path: '/refundpolicy', component: RefundPolicy},
        
    ],
    scrollBehavior(to) {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
});


export default router;

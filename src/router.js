import { createRouter , createWebHistory } from 'vue-router';
// import store from './store';
import LandingPage from './components/LandingPage';
import BuyerPage from './components/BuyerPage';
import DeveloperPage from './components/DeveloperPage';
import ChannelPage from './components/ChannelPartners';
import LawyerPage from './components/LawyerPage';
import PropertyGuru from './components/PropertyGuru';
import FinancialService from './components/FinancialServices';
import ThankYouPage from './components/ThankYouPage';
import DigitalParchi from './components/DigitalParchi';
import CreditsPage from './components/CreditsPage';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage},
        { path: '/about-us', component: LandingPage},
        { path: '/contact-us', component: LandingPage},
        { path: '/buyer', component: BuyerPage},
        { path: '/developer', component: DeveloperPage},
        { path: '/channelpartner', component: ChannelPage},
        { path: '/legal', component: LawyerPage},
        { path: '/propertytransactionguru', component: PropertyGuru},
        { path: '/finance', component: FinancialService },
        { path: '/success', component: ThankYouPage},
        { path: '/digitalparchi', component: DigitalParchi},
        { path: '/credits', component: CreditsPage},
        
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

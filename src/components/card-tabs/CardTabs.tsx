import { Tabs, Tab, TabList, TabPanel } from '@/components/tabs/Tabs';
import AboutCardSection from '@/components/about-card-section';
import ConditionsSection from '@/components/conditions-section';
import CashbackSection from '@/components/cashback-section';
import FaqSection from '@/components/faq-section';
import '@/components/card-tabs/card-tabs.scss';

export default function CardTabs() {
	return (
		<article className="card-tabs">
			<Tabs>
				<TabList classes="card-tabs__tabs-list">
					<Tab classes="tabs-list__tab" index={0}>
						About card
					</Tab>
					<Tab classes="tabs-list__tab" index={1}>
						Rates and conditions
					</Tab>
					<Tab classes="tabs-list__tab" index={2}>
						Cashback
					</Tab>
					<Tab classes="tabs-list__tab" index={3}>
						FAQ
					</Tab>
				</TabList>

				<TabPanel classes="card-tabs__tab-panel" index={0}>
					<AboutCardSection />
				</TabPanel>
				<TabPanel classes="card-tabs__tab-panel" index={1}>
					<ConditionsSection />
				</TabPanel>
				<TabPanel classes="card-tabs__tab-panel" index={2}>
					<CashbackSection />
				</TabPanel>
				<TabPanel classes="card-tabs__tab-panel" index={3}>
					<FaqSection />
				</TabPanel>
			</Tabs>
		</article>
	);
}

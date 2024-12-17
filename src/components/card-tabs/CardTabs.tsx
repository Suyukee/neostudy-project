import { Tabs, Tab, TabList, TabPanel } from '@/components/tabs/Tabs';
import '@/components/card-tabs/card-tabs.scss';

export default function CardTabs() {
	return (
		<article className="card-tabs">
			<Tabs>
				<TabList classnames="card-tabs__tabs-list">
					<Tab classnames="tabs-list__tab" index={0}>
						About card
					</Tab>
					<Tab classnames="tabs-list__tab" index={1}>
						Rates and conditions
					</Tab>
					<Tab classnames="tabs-list__tab" index={2}>
						Cashback
					</Tab>
					<Tab classnames="tabs-list__tab" index={3}>
						FAQ
					</Tab>
				</TabList>
				<TabPanel index={0}>About card</TabPanel>
				<TabPanel index={1}>Rates and conditions</TabPanel>
				<TabPanel index={2}>Cashback</TabPanel>
				<TabPanel index={3}>FAQ</TabPanel>
			</Tabs>
		</article>
	);
}

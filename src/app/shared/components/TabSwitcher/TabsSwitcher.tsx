import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "../Shadcn/ui/tabs";

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
};

const TabsSwitcher = ({ tabs }: Props) => {
  return (
      <Tabs defaultValue={tabs[0]?.value || ""}>
        <TabsList className="bg-white">
          {tabs.map((tab: TabItem) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab: TabItem) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
  );
};

export default TabsSwitcher;

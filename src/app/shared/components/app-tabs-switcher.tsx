import { Tabs } from "@radix-ui/react-tabs";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../shared/components/ui/tabs";

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
};

const PageTabsSwitcher = ({tabs} : Props) => {
  return (
    <>
      <Tabs defaultValue={tabs[0]?.value || ""} className="w-[400px]">
        <TabsList>
            {tabs.map((tab : TabItem) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                </TabsTrigger>
            ))}
        </TabsList>
        {tabs.map((tab : TabItem) =>(
            <TabsContent key={tab.value} value={tab.value}>
                {tab.content}
            </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default PageTabsSwitcher;

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Флеш-картки для підготовки</h1>
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList>
          <TabsTrigger value="tab1">Рядовий[1] - Сержант[2]</TabsTrigger>
          <TabsTrigger value="tab2">Сержант[2] - Старшина[3]</TabsTrigger>
          <TabsTrigger value="tab3">Старшина[3] - Прапорщик[4]</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p className="mt-4">Тут будуть питання для Рядовий → Сержант</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="mt-4">Тут будуть питання для Сержант → Старшина</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="mt-4">Тут будуть питання для Старшина → Прапорщик</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

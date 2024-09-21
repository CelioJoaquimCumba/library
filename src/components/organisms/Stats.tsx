import { Download, Eye, Search, UserCircle2 } from "lucide-react"
import StatCard from "../atoms/StatCard"
import { ChartContainer, type ChartConfig, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/atoms/chart"
import { BarChart, Bar, CartesianGrid, XAxis   } from "recharts"
import { Calendar } from "../atoms/calendar"
import { useState } from "react"
import { Pie, PieChart } from "recharts"

export const description = "A simple pie chart"
const chartDataPie = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
const chartConfigPie = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const chartData = [
{ weekday: "Seg", desktop: 186, mobile: 80 },
{ weekday: "Ter", desktop: 305, mobile: 200 },
{ weekday: "Qua", desktop: 237, mobile: 120 },
{ weekday: "Qui", desktop: 73, mobile: 190 },
{ weekday: "Sex", desktop: 209, mobile: 130 },
{ weekday: "Sab", desktop: 214, mobile: 140 },
{ weekday: "Dom", desktop: 214, mobile: 140 },
]


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#161F32",
  },
  mobile: {
    label: "Mobile",
    color: "#eab308 ",
  },
} satisfies ChartConfig


    const stats = [
        {
            label: 'Numero de acessos',
            value: '1.0000',
            icon: <UserCircle2/>
        },
        {
            label: 'Pesquisas realizadas',
            value: '12.390',
            icon: <Eye />
        },
        {
            label: 'Recursos visualizados',
            value: '10.200',
            icon: <Search />
        },
        {
            label: 'Recursos baixados',
            value: '2.130',
            icon: <Download />
        }
    ]
export default function Stats() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="flex flex-col w-full h-screen bg-blue-100 p-12 gap-8 overflow-y-auto">
            <h2 className="text-xl text-slate-900 font-bold">Painel Principal</h2>
            <section className="flex gap-4">
                {
                    stats.map((stat, index) => <StatCard key={stat.label} {...stat} isYellow={index === 0}/>)
                }
            </section>
            <section className="grid grid-cols-2 auto-rows-min gap-4">
                <h3 className="bg-black text-yellow-500 text-xl font-medium w-fit px-4 rounded-full col-span-2">Acesso Semanal</h3>
                <div className="flex flex-col gap-2">
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full border border-black">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="weekday"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>
                <div className="border border-black flex items-center justify-center">
                    <Calendar
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
            </section>
            <section className="grid grid-cols-2 auto-rows-min gap-4">
                <h3 className="bg-black text-yellow-500 text-xl font-medium w-fit px-4 rounded-full col-span-2">Acesso anual</h3>
                <div className="flex flex-col gap-2">
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full border border-black">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="weekday"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>
                <div className="border border-black flex items-center justify-center">
                    <ChartContainer
                        config={chartConfigPie}
                        className="min-h-[300px] mx-auto aspect-square"
                        >
                        <PieChart width={200} height={200}>
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie width={200} height={200} data={chartDataPie} dataKey="visitors" nameKey="browser" />
                        </PieChart>
                    </ChartContainer>
                </div>
            </section>
            <section className="grid grid-cols-2 auto-rows-min gap-4">
                <h3 className="bg-black text-yellow-500 text-xl font-medium w-fit px-4 rounded-full col-span-2">Acesso anual balanço: 2023 - 2024</h3>
                <div className="flex flex-col gap-2">
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full border border-black">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="weekday"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>
                <div className="border border-black flex items-center justify-center">
                    <ChartContainer
                        config={chartConfigPie}
                        className="min-h-[300px] mx-auto aspect-square"
                        >
                        <PieChart width={200} height={200}>
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie width={200} height={200} data={chartDataPie} dataKey="visitors" nameKey="browser" />
                        </PieChart>
                    </ChartContainer>
                </div>
            </section>
        </div>
    )
}
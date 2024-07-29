export type CalendarSelectorRange = {from: Date | undefined, to: Date | undefined}

export type CalendarSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
    setSelectedDate: React.Dispatch<React.SetStateAction<CalendarSelectorRange>>
    priceDay: string
}
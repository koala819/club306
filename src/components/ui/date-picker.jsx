'use client';

import React from 'react';
import { createCalendar, getLocalTimeZone } from '@internationalized/date';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import {
  DateValue,
  useDateField,
  useDatePicker,
  useDateSegment,
  useLocale,
} from 'react-aria';
import {
  DateFieldStateOptions,
  useDateFieldState,
  useDatePickerState,
} from 'react-stately';

import { cn } from '@/lib/utils';

import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

/* -------------------------------------------------------------------------------------------------
 * DatePicker
 * -----------------------------------------------------------------------------------------------*/

export function DatePicker({ children, ...props }) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState();
  const state = useDatePickerState({
    shouldCloseOnSelect: true,
    ...props,
    isOpen: open,
    onOpenChange: setOpen,
    onChange: (dateValue) => {
      props.onChange?.(dateValue);
      setDate(dateValue?.toDate(getLocalTimeZone()));
    },
  });
  const ref = React.useRef(null);
  const { groupProps, fieldProps, calendarProps } = useDatePicker(
    props,
    state,
    ref
  );

  // Don't focus DateField on click
  children && delete groupProps.onPointerDown;

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <div
          {...(children ? groupProps : {})}
          ref={ref}
          className="inline-block"
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {React.isValidElement(children)
                ? React.cloneElement(children, fieldProps)
                : date
                ? format(date, 'PPP')
                : props.label}
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="w-auto p-3">
          <Calendar {...calendarProps} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DateField
 * -----------------------------------------------------------------------------------------------*/

export function DateField(props) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = React.useRef(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div>
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className="inline-flex">
        {state.segments.map((segment, index) => (
          <DateSegment key={index} segment={segment} state={state} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DateSegment
 * -----------------------------------------------------------------------------------------------*/

function DateSegment({ segment, state }) {
  const ref = React.useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className="rounded-[2px] px-0.5 text-end tabular-nums outline-none focus:bg-primary focus:text-primary-foreground"
    >
      {segment.text}
    </div>
  );
}

"use client";

import { ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "../navigation";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  children: string[];
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: SelectChangeEvent<string>, child: ReactNode) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <FormControl disabled={isPending} sx={{ minWidth: "100px" }} size="small">
      <InputLabel id="locale-switcher-label">{label}</InputLabel>
      <Select
        labelId="locale-switcher-label"
        id="locale-switcher-select"
        value={defaultValue}
        label={label}
        onChange={onSelectChange}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {children != undefined &&
          children.map((locale) => (
            <MenuItem key={locale} value={locale}>
              {locale}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

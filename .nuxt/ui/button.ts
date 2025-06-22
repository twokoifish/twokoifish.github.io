const color = [
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "error",
  "sky",
  "amber",
  "blue",
  "stone",
  "neutral"
] as const

const variant = [
  "solid",
  "outline",
  "soft",
  "subtle",
  "ghost",
  "link"
] as const

const size = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

export default {
  "slots": {
    "base": [
      "rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
      "transition-colors"
    ],
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "sky": "",
      "amber": "",
      "blue": "",
      "stone": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": "",
      "ghost": "",
      "link": ""
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "block": {
      "true": {
        "base": "w-full justify-center",
        "trailingIcon": "ms-auto"
      }
    },
    "square": {
      "true": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "active": {
      "true": {
        "base": ""
      },
      "false": {
        "base": ""
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-primary hover:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    },
    {
      "color": "secondary" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-secondary hover:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    },
    {
      "color": "tertiary" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-tertiary hover:bg-tertiary/75 disabled:bg-tertiary aria-disabled:bg-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
    },
    {
      "color": "info" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-info hover:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
    },
    {
      "color": "success" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-success hover:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
    },
    {
      "color": "warning" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-warning hover:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
    },
    {
      "color": "error" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-error hover:bg-error/75 disabled:bg-error aria-disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
    },
    {
      "color": "sky" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-sky hover:bg-sky/75 disabled:bg-sky aria-disabled:bg-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
    },
    {
      "color": "amber" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-amber hover:bg-amber/75 disabled:bg-amber aria-disabled:bg-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
    },
    {
      "color": "blue" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-blue hover:bg-blue/75 disabled:bg-blue aria-disabled:bg-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
    },
    {
      "color": "stone" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-stone hover:bg-stone/75 disabled:bg-stone aria-disabled:bg-stone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone"
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    },
    {
      "color": "secondary" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    },
    {
      "color": "tertiary" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-tertiary/50 text-tertiary hover:bg-tertiary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
    },
    {
      "color": "info" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-info/50 text-info hover:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info"
    },
    {
      "color": "success" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-success/50 text-success hover:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
    },
    {
      "color": "warning" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning"
    },
    {
      "color": "error" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-error/50 text-error hover:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
    },
    {
      "color": "sky" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-sky/50 text-sky hover:bg-sky/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
    },
    {
      "color": "amber" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-amber/50 text-amber hover:bg-amber/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    },
    {
      "color": "blue" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-blue/50 text-blue hover:bg-blue/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
    },
    {
      "color": "stone" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-stone/50 text-stone hover:bg-stone/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-stone"
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-primary bg-primary/10 hover:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10"
    },
    {
      "color": "secondary" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-secondary bg-secondary/10 hover:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10"
    },
    {
      "color": "tertiary" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-tertiary bg-tertiary/10 hover:bg-tertiary/15 focus:outline-none focus-visible:bg-tertiary/15 disabled:bg-tertiary/10 aria-disabled:bg-tertiary/10"
    },
    {
      "color": "info" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-info bg-info/10 hover:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10"
    },
    {
      "color": "success" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-success bg-success/10 hover:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10"
    },
    {
      "color": "warning" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-warning bg-warning/10 hover:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10"
    },
    {
      "color": "error" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-error bg-error/10 hover:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10"
    },
    {
      "color": "sky" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-sky bg-sky/10 hover:bg-sky/15 focus:outline-none focus-visible:bg-sky/15 disabled:bg-sky/10 aria-disabled:bg-sky/10"
    },
    {
      "color": "amber" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-amber bg-amber/10 hover:bg-amber/15 focus:outline-none focus-visible:bg-amber/15 disabled:bg-amber/10 aria-disabled:bg-amber/10"
    },
    {
      "color": "blue" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-blue bg-blue/10 hover:bg-blue/15 focus:outline-none focus-visible:bg-blue/15 disabled:bg-blue/10 aria-disabled:bg-blue/10"
    },
    {
      "color": "stone" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-stone bg-stone/10 hover:bg-stone/15 focus:outline-none focus-visible:bg-stone/15 disabled:bg-stone/10 aria-disabled:bg-stone/10"
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    },
    {
      "color": "secondary" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    },
    {
      "color": "tertiary" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-tertiary ring ring-inset ring-tertiary/25 bg-tertiary/10 hover:bg-tertiary/15 disabled:bg-tertiary/10 aria-disabled:bg-tertiary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
    },
    {
      "color": "info" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info"
    },
    {
      "color": "success" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
    },
    {
      "color": "warning" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning"
    },
    {
      "color": "error" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
    },
    {
      "color": "sky" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-sky ring ring-inset ring-sky/25 bg-sky/10 hover:bg-sky/15 disabled:bg-sky/10 aria-disabled:bg-sky/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
    },
    {
      "color": "amber" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-amber ring ring-inset ring-amber/25 bg-amber/10 hover:bg-amber/15 disabled:bg-amber/10 aria-disabled:bg-amber/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    },
    {
      "color": "blue" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-blue ring ring-inset ring-blue/25 bg-blue/10 hover:bg-blue/15 disabled:bg-blue/10 aria-disabled:bg-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
    },
    {
      "color": "stone" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "text-stone ring ring-inset ring-stone/25 bg-stone/10 hover:bg-stone/15 disabled:bg-stone/10 aria-disabled:bg-stone/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone"
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-primary hover:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "secondary" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-secondary hover:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "tertiary" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-tertiary hover:bg-tertiary/10 focus:outline-none focus-visible:bg-tertiary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "info" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-info hover:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "success" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-success hover:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "warning" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-warning hover:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "error" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-error hover:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "sky" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-sky hover:bg-sky/10 focus:outline-none focus-visible:bg-sky/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "amber" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-amber hover:bg-amber/10 focus:outline-none focus-visible:bg-amber/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "blue" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-blue hover:bg-blue/10 focus:outline-none focus-visible:bg-blue/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "stone" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-stone hover:bg-stone/10 focus:outline-none focus-visible:bg-stone/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "primary" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-primary hover:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-secondary hover:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "tertiary" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-tertiary hover:text-tertiary/75 disabled:text-tertiary aria-disabled:text-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tertiary"
    },
    {
      "color": "info" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-info hover:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "success" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-success hover:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "warning" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-warning hover:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-error hover:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "sky" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-sky hover:text-sky/75 disabled:text-sky aria-disabled:text-sky focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky"
    },
    {
      "color": "amber" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-amber hover:text-amber/75 disabled:text-amber aria-disabled:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber"
    },
    {
      "color": "blue" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-blue hover:text-blue/75 disabled:text-blue aria-disabled:text-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue"
    },
    {
      "color": "stone" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-stone hover:text-stone/75 disabled:text-stone aria-disabled:text-stone focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone"
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "solid" as typeof variant[number],
      "class": "text-inverted bg-inverted hover:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "outline" as typeof variant[number],
      "class": "ring ring-inset ring-accented text-default bg-default hover:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted"
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "soft" as typeof variant[number],
      "class": "text-default bg-elevated hover:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated"
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "subtle" as typeof variant[number],
      "class": "ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted"
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "ghost" as typeof variant[number],
      "class": "text-default hover:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
    },
    {
      "color": "neutral" as typeof color[number],
      "variant": "link" as typeof variant[number],
      "class": "text-muted hover:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted"
    },
    {
      "size": "xs" as typeof size[number],
      "square": true,
      "class": "p-1"
    },
    {
      "size": "sm" as typeof size[number],
      "square": true,
      "class": "p-1.5"
    },
    {
      "size": "md" as typeof size[number],
      "square": true,
      "class": "p-1.5"
    },
    {
      "size": "lg" as typeof size[number],
      "square": true,
      "class": "p-2"
    },
    {
      "size": "xl" as typeof size[number],
      "square": true,
      "class": "p-2"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary" as typeof color[number],
    "variant": "solid" as typeof variant[number],
    "size": "md" as typeof size[number]
  }
}
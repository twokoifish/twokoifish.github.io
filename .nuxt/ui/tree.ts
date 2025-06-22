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

const size = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

export default {
  "slots": {
    "root": "relative isolate",
    "item": "",
    "listWithChildren": "ms-4.5 border-s border-default",
    "itemWithChildren": "ps-1.5 -ms-px",
    "link": "relative group w-full flex items-center text-sm before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0",
    "linkLabel": "truncate",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingIcon": "shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-primary"
      },
      "secondary": {
        "link": "focus-visible:before:ring-secondary"
      },
      "tertiary": {
        "link": "focus-visible:before:ring-tertiary"
      },
      "info": {
        "link": "focus-visible:before:ring-info"
      },
      "success": {
        "link": "focus-visible:before:ring-success"
      },
      "warning": {
        "link": "focus-visible:before:ring-warning"
      },
      "error": {
        "link": "focus-visible:before:ring-error"
      },
      "sky": {
        "link": "focus-visible:before:ring-sky"
      },
      "amber": {
        "link": "focus-visible:before:ring-amber"
      },
      "blue": {
        "link": "focus-visible:before:ring-blue"
      },
      "stone": {
        "link": "focus-visible:before:ring-stone"
      },
      "neutral": {
        "link": "focus-visible:before:ring-inverted"
      }
    },
    "size": {
      "xs": {
        "link": "px-2 py-1 text-xs gap-1",
        "linkLeadingIcon": "size-4",
        "linkTrailingIcon": "size-4"
      },
      "sm": {
        "link": "px-2.5 py-1.5 text-xs gap-1.5",
        "linkLeadingIcon": "size-4",
        "linkTrailingIcon": "size-4"
      },
      "md": {
        "link": "px-2.5 py-1.5 text-sm gap-1.5",
        "linkLeadingIcon": "size-5",
        "linkTrailingIcon": "size-5"
      },
      "lg": {
        "link": "px-3 py-2 text-sm gap-2",
        "linkLeadingIcon": "size-5",
        "linkTrailingIcon": "size-5"
      },
      "xl": {
        "link": "px-3 py-2 text-base gap-2",
        "linkLeadingIcon": "size-6",
        "linkTrailingIcon": "size-6"
      }
    },
    "selected": {
      "true": {
        "link": "before:bg-elevated"
      },
      "false": {
        "link": [
          "hover:not-disabled:text-highlighted hover:not-disabled:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-primary"
      }
    },
    {
      "color": "secondary" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-secondary"
      }
    },
    {
      "color": "tertiary" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-tertiary"
      }
    },
    {
      "color": "info" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-info"
      }
    },
    {
      "color": "success" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-success"
      }
    },
    {
      "color": "warning" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-warning"
      }
    },
    {
      "color": "error" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-error"
      }
    },
    {
      "color": "sky" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-sky"
      }
    },
    {
      "color": "amber" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-amber"
      }
    },
    {
      "color": "blue" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-blue"
      }
    },
    {
      "color": "stone" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-stone"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary" as typeof color[number],
    "size": "md" as typeof size[number]
  }
}
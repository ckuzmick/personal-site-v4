import "@fontsource/atkinson-hyperlegible/";

export default {
    "colors": {
      "text": "hsl(210, 50%, 96%)",
      "background": "hsl(230, 25%, 18%)",
      "primary": "hsl(260, 100%, 80%)",
      "secondary": "hsl(290, 100%, 80%)",
      "highlight": "hsl(260, 20%, 40%)",
      "purple": "hsl(290, 100%, 80%)",
      "muted": "hsla(230, 20%, 0%, 20%)",
      "gray": "hsl(210, 50%, 60%)"
    },
    "fonts": {
      "body": "Atkinson Hyperlegible, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
      "heading": "Atikinson Hyperlegible, -apple-system, system-ui",
      "monospace": "Menlo, monospace"
    },
    "fontSizes": [
      12,
      14,
      16,
      20,
      24,
      32,
      48,
      64,
      72
    ],
    "fontWeights": {
      "body": 400,
      "heading": 900,
      "display": 900
    },
    "lineHeights": {
      "body": 1.5,
      "heading": 1.25
    },
    "text": {
      "heading": {
        "fontFamily": "heading",
        "fontWeight": "900",
        "lineHeight": "heading"
      },
      "display": {
        "variant": "text.heading",
        "fontSize": [
          5,
          6
        ],
        "fontWeight": "display",
        "letterSpacing": "-0.03em",
        "mt": 3
      }
    },
    "styles": {
      "Container": {
        "p": 3,
        "maxWidth": 1024
      },
      "root": {
        "fontFamily": "body",
        "lineHeight": "body",
        "fontWeight": "body",
        "margin": "10vw"
      },
      "h1": {
        "variant": "text.heading",
        "marginTop": "0px"
      },
      "h2": {
        "variant": "text.body",
        "fontSize": "27px"
      },
      "h3": {
        "variant": "text.heading",
        "fontSize": 4
      },
      "h4": {
        "variant": "text.heading",
        "fontSize": 3
      },
      "h5": {
        "variant": "text.heading",
        "fontSize": 2
      },
      "h6": {
        "variant": "text.heading",
        "fontSize": 1
      },
      "a": {
        "color": "primary",
        "&:hover": {
          "color": "secondary"
        }
      },
      "p": {
        "fontSize": "17px",
        "lineHeight": "24px"
      },
      "pre": {
        "variant": "prism",
        "fontFamily": "monospace",
        "fontSize": 1,
        "p": 3,
        "color": "text",
        "bg": "muted",
        "overflow": "auto",
        "code": {
          "color": "inherit"
        }
      },
      "code": {
        "fontFamily": "monospace",
        "color": "secondary",
        "fontSize": 1
      },
      "inlineCode": {
        "fontFamily": "monospace",
        "color": "secondary",
        "bg": "muted"
      },
      "table": {
        "width": "100%",
        "my": 4,
        "borderCollapse": "separate",
        "borderSpacing": 0,
        "th,td": {
          "textAlign": "left",
          "py": "4px",
          "pr": "4px",
          "pl": 0,
          "borderColor": "muted",
          "borderBottomStyle": "solid"
        }
      },
      "th": {
        "verticalAlign": "bottom",
        "borderBottomWidth": "2px"
      },
      "td": {
        "verticalAlign": "top",
        "borderBottomWidth": "1px"
      },
      "hr": {
        "border": 0,
        "borderBottom": "1px solid",
        "borderColor": "gray",
      },
      "img": {
        "maxWidth": "100%"
      }
    },
    "prism": {
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        "color": "gray"
      },
      ".comment": {
        "fontStyle": "italic"
      },
      ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
        "color": "purple"
      },
      ".atrule,.attr-value,.keyword": {
        "color": "primary"
      },
      ".selector,.attr-name,.string,.char,.builtin,.inserted": {
        "color": "secondary"
      }
    }
  }
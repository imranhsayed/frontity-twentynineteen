import React from "react";
import { connect, Global, css } from "frontity";

const GlobalCss = ({ state }) => (
  <Global
    styles={css`
      p,
      body,
      article,
      html {
        font-family: "Hoefler Text", "Baskerville Old Face", Garamond,
          "Times New Roman", serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      /**
            * 1. Correct the line height in all browsers.
            * 2. Prevent adjustments of font size after orientation changes in iOS.
            */

      html {
        line-height: 1.15;
        /* 1 */
        -webkit-text-size-adjust: 100%;
        /* 2 */
      }
      /**
          * Remove the margin in all browsers.
          */

      body {
        margin: 0;
      }

      /**
          * Correct the font size and margin on h1 elements within section and
          * article contexts in Chrome, Firefox, and Safari.
          */

      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }

      /**
          * Remove the gray background on active links in IE 10.
          */

      a {
        background-color: transparent;
      }

      /**
          * 1. Correct the inheritance and scaling of font size in all browsers.
          * 2. Correct the odd em font sizing in all browsers.
          */

      pre {
        font-family: monospace, monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
      }

      /**
          * 1. Remove the bottom border in Chrome 57-
          * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
          */
      abbr[title] {
        border-bottom: none;
        /* 1 */
        text-decoration: underline;
        /* 2 */
        text-decoration: underline dotted;
        /* 2 */
      }

      /**
          * Add the correct font weight in Chrome, Edge, and Safari.
          */
      b,
      strong {
        font-weight: bolder;
      }

      /**
          * 1. Correct the inheritance and scaling of font size in all browsers.
          * 2. Correct the odd em font sizing in all browsers.
          */
      code,
      kbd,
      samp {
        font-family: monospace, monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
      }

      /**
          * Add the correct font size in all browsers.
          */
      small {
        font-size: 80%;
      }

      /**
           * Prevent sup and sub elements from affecting the line height in
           * all browsers.
           */
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      /**
           * Remove the border on images inside links in IE 10.
           */
      img {
        border-style: none;
      }

      /**
         * 1. Change the font styles in all browsers.
         * 2. Remove the margin in Firefox and Safari.
         */
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        /* 1 */
        font-size: 100%;
        /* 1 */
        line-height: 1.15;
        /* 1 */
        margin: 0;
        /* 2 */
      }

      /**
             * Show the overflow in IE.
             * 1. Show the overflow in Edge.
             */
      button,
      input {
        /* 1 */
        overflow: visible;
      }

      /**
           * Remove the inheritance of text transform in Edge, Firefox, and IE.
           * 1. Remove the inheritance of text transform in Firefox.
           */
      button,
      select {
        /* 1 */
        text-transform: none;
      }

      /**
           * Correct the inability to style clickable types in iOS and Safari.
           */
      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }

      /**
           * Remove the inner border and padding in Firefox.
           */
      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      /**
         * Restore the focus styles unset by the previous rule.
         */
      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      /**
       * Correct the padding in Firefox.
       */
      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      /**
       * 1. Correct the text wrapping in Edge and IE.
       * 2. Correct the color inheritance from fieldset elements in IE.
       * 3. Remove the padding so developers are not caught out when they zero out
       *		fieldset elements in all browsers.
      */
      legend {
        box-sizing: border-box;
        /* 1 */
        color: inherit;
        /* 2 */
        display: table;
        /* 1 */
        max-width: 100%;
        /* 1 */
        padding: 0;
        /* 3 */
        white-space: normal;
        /* 1 */
      }

      /**
       * Add the correct vertical alignment in Chrome, Firefox, and Opera.
       */
      progress {
        vertical-align: baseline;
      }

      /**
       * Remove the default vertical scrollbar in IE 10+.
       */
      textarea {
        overflow: auto;
      }

      /**
       * 1. Add the correct box sizing in IE 10.
       * 2. Remove the padding in IE 10.
       */
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        /* 1 */
        padding: 0;
        /* 2 */
      }

      /**
       * Correct the cursor style of increment and decrement buttons in Chrome.
       */
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }

      /**
       * 1. Correct the odd appearance in Chrome and Safari.
       * 2. Correct the outline style in Safari.
       */
      [type="search"] {
        -webkit-appearance: textfield;
        /* 1 */
        outline-offset: -2px;
        /* 2 */
      }

      /**
       * Remove the inner padding in Chrome and Safari on macOS.
       */
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      /**
       * 1. Correct the inability to style clickable types in iOS and Safari.
       * 2. Change font properties to  in Safari.
       */
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        /* 1 */
        font: inherit;
        /* 2 */
      }

      /* Interactive
        ========================================================================== */
      /*
      * Add the correct display in Edge, IE 10+, and Firefox.
      */
      details {
        display: block;
      }

      /*
      * Add the correct display in all browsers.
      */
      summary {
        display: list-item;
      }

      /* Misc
        ========================================================================== */
      /**
       * Add the correct display in IE 10+.
       */
      template {
        display: none;
      }

      /**
       * Add the correct display in IE 10.
       */
      [hidden] {
        display: none;
      }

      /* Typography */
      html {
        font-size: 22px;
        box-sizing: border-box;
      }

      ::-moz-selection {
        background-color: #999999;
      }

      ::selection {
        background-color: #999999;
      }

      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #111;
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
          "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.8;
        margin: 0;
        text-rendering: optimizeLegibility;
        background-color: #fff;
      }

      button,
      input,
      select,
      optgroup,
      textarea {
        color: #111;
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
          "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: 400;
        line-height: 1.8;
        text-rendering: optimizeLegibility;
      }

      h1 {
        font-size: 2.25em;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      h1:not(.site-title):before,
      h2:before {
        background: #767676;
        display: block;
        height: 2px;
        margin: 1rem 0;
        width: 1em;
      }

      a {
        text-decoration: none;
        transition: color 110ms ease-in-out;
        color: ${state.theme.color};
      }

      a:hover {
        text-decoration: none;
      }

      a:focus {
        text-decoration: underline;
        outline: thin dotted;
      }

      a:hover,
      a:active {
        color: ${state.theme.color};
        outline: 0;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        clear: both;
        margin: 1rem 0;
      }

      p {
        -webit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      dfn,
      cite,
      em,
      i {
        font-style: italic;
      }

      blockquote cite {
        font-size: 0.71111em;
        font-style: normal;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      code,
      kbd,
      tt,
      var {
        font-size: -0.88889em;
        font-family: Menlo, monaco, Consolas, Lucida Console, monospace;
      }

      abbr,
      acronym {
        border-bottom: 1px dotted #666;
        cursor: help;
      }

      mark,
      ins {
        background: #fff9c0;
        text-decoration: none;
      }

      ul,
      ol {
        padding-left: 1rem;
      }

      ul {
        list-styles: disc;
      }

      ul ul {
        list-style-type: circle;
      }

      ol {
        line-height: decimal;
      }

      li {
        line-height: 1.8;
      }

      li > ul,
      li > ol {
        padding-left: 2rem;
      }

      dt {
        font-weight: bold;
      }

      dd {
        margin: 1 1rem 1rem;
      }

      img {
        height: auto;
        max-width: 100%;
        position: relative;
      }

      figure {
        margin: 0;
      }

      table {
        margin: 0 0 1rem;
        border-collapse: collapse;
        width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      table td,
      table th {
        padding: 0.5rem;
        border: 1px solid #767676;
        word-break: break-all;
      }

      textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        max-width: 100%;
        resize: vertical;
      }

      input[type="search"]::-webkit-search-decoration {
        display: none;
      }

      form p {
        margin: 1rem 0;
      }

      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 2.8125em;
        }
      }

      @media (prefers-color-scheme: dark) {
        body {
          background-color: black !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        table,
        code {
          color: white !important;
        }

        blockquote {
          background-color: #181818 !important;
          color: white !important;
        }

        pre {
          background-color: #181818 !important;
        }

        figcaption {
          color: #767676 !important;
        }

        ::-webkit-scrollbar {
          width: 12px;
          background: #111;
        }

        ::-webkit-scrollbar-thumb {
          background: ${state.theme.color};
          -webkit-border-radius: 2px;
          -webkit-box-shadow: 0px 1px 2px rgba(100, 100, 100, 0.75);
        }

        ::-webkit-scrollbar-corner {
          background: #000;
        }
      }
    `}
  />
);

export default connect(GlobalCss);

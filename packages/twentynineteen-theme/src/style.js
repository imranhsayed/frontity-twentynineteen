import { css, injectGlobal } from "emotion";

export const siteTitle = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.125em;

    font-weight: normal;

    @media only screen and (min-width: 768px) {
        & + .${socialNavigation} {
            margin-top: calc(1rem / 5);
        }
    }

    margin: auto;
    display: inline;
    color: #111;
    /* When there is no description set, make sure navigation appears below title. */

    & a {
        color: #111;
    }

    & a:link,
    & a:visited {
        color: #111;
    }

    & a:hover {
        color: #4a4a4a;
    }

    & + .${mainNavigation} {
        display: block;
    }

    @media only screen and (min-width: 768px) {
        & {
            display: inline;
        }
    }

    &:not(:empty) + .${siteDescription}:not(:empty):before {
        content: "\\2014";
        margin: 0 0.2em;
    }
`;

injectGlobal`
    @charset "UTF-8";
    /*
Theme Name: Twenty Nineteen
Theme URI: https://wordpress.org/themes/twentynineteen/
Author: the WordPress team
Author URI: https://wordpress.org/
Description: Our 2019 default theme is designed to show off the power of the block editor. It features custom styles for all the default blocks, and is built so that what you see in the editor looks like what you'll see on your website. Twenty Nineteen is designed to be adaptable to a wide range of websites, whether you’re running a photo blog, launching a new business, or supporting a non-profit. Featuring ample whitespace and modern sans-serif headlines paired with classic serif body text, it's built to be beautiful on all screen sizes.
Requires at least: WordPress 4.9.6
Version: 1.4
License: GNU General Public License v2 or later
License URI: LICENSE
Text Domain: twentynineteen
Tags: one-column, flexible-header, accessibility-ready, custom-colors, custom-menu, custom-logo, editor-style, featured-images, footer-widgets, rtl-language-support, sticky-post, threaded-comments, translation-ready

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.

Twenty Nineteen is based on Underscores https://underscores.me/, (C) 2012-2018 Automattic, Inc.
Underscores is distributed under the terms of the GNU GPL v2 or later.

Normalizing styles have been helped along thanks to the fine work of
Nicolas Gallagher and Jonathan Neal https://necolas.github.io/normalize.css/
*/
    /*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Variables
# Normalize
# Typography
	## Headings
	## Copy
# Elements
	## Lists
	## Tables
# Forms
	## Buttons
	## Fields
# Navigation
	## Links
	## Menus
	## Next & Previous
# Accessibility
# Alignments
# Clearings
# Layout
# Widgets
# Content
	## Archives
	## Posts and pages
	## Comments
# Blocks
# Media
	## Captions
	## Galleries
--------------------------------------------------------------*/
    /*
 * Chrome renders extra-wide &nbsp; characters for the Hoefler Text font.
 * This results in a jumping cursor when typing in both the Classic and block
 * editors. The following font-face override fixes the issue by manually inserting
 * a custom font that includes just a Hoefler Text space replacement for that
 * character instead.
 */
    @font-face {
        font-family: "NonBreakingSpaceOverride";
        src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAA0AAAAACDQAAALTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCahEICjx3CywAATYCJANUBCAFhiEHgWwbXQfILgpsY+rQRRARwyAs6uL7pxzYhxEE+32b3aehmifr6tklks9hiza0ewkqgrje+H7/+6378asvik/PGeavqJyOzsceKi1s3BCiQsiOdn1r/RBgIJYEgCUhbm/8/8/h4saPssnTNkkiWUBrTRtjmQSajw3Ui3pZ3LYDPD+XG2C3JA/yKAS8/rU5eNfuGqRf4eNNgV4YAlIIgxglEkWe6FYpq10+wi3g+/nUgvgPFczNrz/RsTgVm/zfbPuHZlsuQECxuyqBcQwKFBjFgKO8AqP4bAN9tFJtnM9xPcbNjeXS/x1wY/xU52f5W/X1+9cnh4ywkiaorrakukj/YlAAeF/624foiIDBgBmgQBeGAyhBljUPZUm/l2dTvmpqcBDUOHdbPZWd8JsBAsGr4w8/EDn82/bUPx4eh0YNrQTBuHO2FjQEAGBwK0DeI37DpQVqdERS4gZBhpeUhWCfLFz7J99aEBgsJCHvUGAdAPp4IADDCAPCEFMGpMZ9AQpTfQtQGhLbGVBZFV8BaqNyP68oTZgHNj3M8kBPfXTTC9t90UuzYhy9ciH0grVlOcqyCytisvbsERsEYztiznR0WCrmTksJwbSNK6fd1Rvr25I9oLvctUoEbNOmXJbqgYgPXEHJ82IUsrCnpkxh23F1rfZ2zcRnJYoXtauB3VTFkFXQg3uoZYD5qE0kdjDtoDoF1h2bulGmev5HbYhbrjtohQSRI4aNOkffIcT+d3v6atpaYh3JvPoQsztCcqvaBkppDSPcQ3bw3KaCBo1f5CJWTZEgW3LjLofYg51MaVezrx8xZitYbQ9KYeoRaqQdVLwSEfrKXLK1otCWOKNdR/YwYAfon5Yk8O2MJfSD10dPGA5PIJJQMkah0ugMJiv6x4Dm7LEa8xnrRGGGLAg4sAlbsA07sAt76DOsXKO3hIjtIlpnnFrt1qW4kh6NhS83P/6HB/fl1SMAAA==)
                format("woff2"),
            url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUQAA0AAAAACDQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE9AAAABwAAAAchf5yU0dERUYAAATYAAAAHAAAAB4AJwAbT1MvMgAAAaAAAABJAAAAYJAcgU5jbWFwAAACIAAAAF4AAAFqUUxBZ2dhc3AAAATQAAAACAAAAAgAAAAQZ2x5ZgAAApAAAAAyAAAAPL0n8y9oZWFkAAABMAAAADAAAAA2Fi93Z2hoZWEAAAFgAAAAHQAAACQOSgWaaG10eAAAAewAAAAzAAAAVC7TAQBsb2NhAAACgAAAABAAAAAsAOQBAm1heHAAAAGAAAAAHQAAACAAWQALbmFtZQAAAsQAAAF6AAADIYvD/Adwb3N0AAAEQAAAAI4AAADsapk2o3jaY2BkYGAA4ov5mwzj+W2+MnCzXwCKMNzgCBSB0LfbQDQ7AxuI4mBgAlEAFKQIRHjaY2BkYGD3+NvCwMDBAALsDAyMDKhAFAA3+wH3AAAAeNpjYGRgYBBl4GBgYgABEMnIABJzAPMZAAVmAGUAAAB42mNgZlJhnMDAysDCKsKygYGBYRqEZtrDYMT4D8gHSmEHjgUFOQwODAqqf9g9/rYwMLB7MNUAhRlBcsxBrMlASoGBEQAj8QtyAAAAeNrjYGBkAAGmWQwMjO8gmBnIZ2NA0ExAzNjAAFYJVn0ASBsD6VAIDZb7AtELAgANIgb9AHjaY2BgYGaAYBkGRgYQSAHyGMF8FgYPIM3HwMHAxMDGoMCwQIFLQV8hXvXP//9AcRCfAcb///h/ygPW+w/vb7olBjUHCTCyMcAFGZmABBO6AogThgZgIUsXAEDcEzcAAHjaY2BgECMCyoEgACZaAed42mNgYmRgYGBnYGNgYAZSDJqMgorCgoqCjECRXwwNrCAKSP5mAAFGBiRgyAAAi/YFBQAAeNqtkc1OwkAUhU/5M25cEhcsZick0AwlBJq6MWwgJkAgYV/KAA2lJeUn+hY+gktXvpKv4dLTMqKycGHsTZNv7px7z50ZAFd4hYHjdw1Ls4EiHjVncIFnzVnc4F1zDkWjrzmPW+NNcwGlzIRKI3fJlUyrEjZQxb3mDH2fNGfRx4vmHKqG0JzHg6E0F9DOlFBGBxUI1GEzLNT4S0aLuTtsGAEUuYcQHkyg3KmIum1bNUvKlrjbbAIleqHHnS4iSudpQcySMYtdFiXlAxzSbAwfMxK6kZoHKhbjjespMTioOPZnzI+4uccetvykmvklfeas6vswatinuzwzyy/Dc7vaed+6kav0kukdpuk6yocctzpvvxxqksq2lew8rvhjmeo2fcl/zy6p3NEm0R9OFSafJdldc4QVeyaaObMBO0/5cCaa6d9Ggyubxire+lEojscdjoWUR1xGOy8KD8mG2ZLO2l2paDc3A39qmU2z2W5YNv5+u79e6QfGJY/hAAB42m3NywrCMBQE0DupWp/1AYI7/6DEaLQu66Mrd35BKUWKJSlFv1+rue4cGM7shgR981qSon+ZNwUJ8iDgoYU2OvDRRQ99DDDECAHGmGCKmf80hZSx/Kik/LliFbtmN6xmt+yOjdg9GztV4tROnRwX/Bsaaw51nt4Lc7tWaZYHp/MlzKx51LZs5htNri+2aaaaaqab//8ad3jay2bkygdgawixigziyarcesbmafmyaar6aemaaaabaaaaanxtrbgaaaaa2ahrfaaaaadycnug)
                format("woff");
    }

    /* If we add the border using a regular CSS border, it won't look good on non-retina devices,
 * since its edges can look jagged due to lack of antialiasing. In this case, we are several
 * layers of box-shadow to add the border visually, which will render the border smoother. */
    /* Calculates maximum width for post content */
    /* Nested sub-menu padding: 10 levels deep */
    /* Ensure all font family declarations come with non-latin fallbacks */
    /* Build our non-latin font styles */
    body:lang(ar),
    button:lang(ar),
    input:lang(ar),
    select:lang(ar),
    optgroup:lang(ar),
    textarea:lang(ar),
    #cancel-comment-reply-link:lang(ar),
    h1:lang(ar),
    h2:lang(ar),
    h3:lang(ar),
    h4:lang(ar),
    h5:lang(ar),
    h6:lang(ar),
    blockquote cite:lang(ar),
    table:lang(ar),
    input:lang(ar)[type="button"],
    input:lang(ar)[type="reset"],
    input:lang(ar)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(ary),
    button:lang(ary),
    input:lang(ary),
    select:lang(ary),
    optgroup:lang(ary),
    textarea:lang(ary),
    #cancel-comment-reply-link:lang(ary),
    h1:lang(ary),
    h2:lang(ary),
    h3:lang(ary),
    h4:lang(ary),
    h5:lang(ary),
    h6:lang(ary),
    blockquote cite:lang(ary),
    table:lang(ary),
    input:lang(ary)[type="button"],
    input:lang(ary)[type="reset"],
    input:lang(ary)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(azb),
    button:lang(azb),
    input:lang(azb),
    select:lang(azb),
    optgroup:lang(azb),
    textarea:lang(azb),
    #cancel-comment-reply-link:lang(azb),
    h1:lang(azb),
    h2:lang(azb),
    h3:lang(azb),
    h4:lang(azb),
    h5:lang(azb),
    h6:lang(azb),
    blockquote cite:lang(azb),
    table:lang(azb),
    input:lang(azb)[type="button"],
    input:lang(azb)[type="reset"],
    input:lang(azb)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(ckb),
    button:lang(ckb),
    input:lang(ckb),
    select:lang(ckb),
    optgroup:lang(ckb),
    textarea:lang(ckb),
    #cancel-comment-reply-link:lang(ckb),
    h1:lang(ckb),
    h2:lang(ckb),
    h3:lang(ckb),
    h4:lang(ckb),
    h5:lang(ckb),
    h6:lang(ckb),
    blockquote cite:lang(ckb),
    table:lang(ckb),
    input:lang(ckb)[type="button"],
    input:lang(ckb)[type="reset"],
    input:lang(ckb)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(fa-ir),
    button:lang(fa-ir),
    input:lang(fa-ir),
    select:lang(fa-ir),
    optgroup:lang(fa-ir),
    textarea:lang(fa-ir),
    #cancel-comment-reply-link:lang(fa-ir),
    h1:lang(fa-ir),
    h2:lang(fa-ir),
    h3:lang(fa-ir),
    h4:lang(fa-ir),
    h5:lang(fa-ir),
    h6:lang(fa-ir),
    blockquote cite:lang(fa-ir),
    table:lang(fa-ir),
    input:lang(fa-ir)[type="button"],
    input:lang(fa-ir)[type="reset"],
    input:lang(fa-ir)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(haz),
    button:lang(haz),
    input:lang(haz),
    select:lang(haz),
    optgroup:lang(haz),
    textarea:lang(haz),
    #cancel-comment-reply-link:lang(haz),
    h1:lang(haz),
    h2:lang(haz),
    h3:lang(haz),
    h4:lang(haz),
    h5:lang(haz),
    h6:lang(haz),
    blockquote cite:lang(haz),
    table:lang(haz),
    input:lang(haz)[type="button"],
    input:lang(haz)[type="reset"],
    input:lang(haz)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(ps),
    button:lang(ps),
    input:lang(ps),
    select:lang(ps),
    optgroup:lang(ps),
    textarea:lang(ps),
    #cancel-comment-reply-link:lang(ps),
    h1:lang(ps),
    h2:lang(ps),
    h3:lang(ps),
    h4:lang(ps),
    h5:lang(ps),
    h6:lang(ps),
    blockquote cite:lang(ps),
    table:lang(ps),
    input:lang(ps)[type="button"],
    input:lang(ps)[type="reset"],
    input:lang(ps)[type="submit"] {
        font-family: Tahoma, Arial, sans-serif;
    }

    body:lang(be),
    button:lang(be),
    input:lang(be),
    select:lang(be),
    optgroup:lang(be),
    textarea:lang(be),
    #cancel-comment-reply-link:lang(be),
    h1:lang(be),
    h2:lang(be),
    h3:lang(be),
    h4:lang(be),
    h5:lang(be),
    h6:lang(be),
    blockquote cite:lang(be),
    table:lang(be),
    input:lang(be)[type="button"],
    input:lang(be)[type="reset"],
    input:lang(be)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(bg-bg),
    button:lang(bg-bg),
    input:lang(bg-bg),
    select:lang(bg-bg),
    optgroup:lang(bg-bg),
    textarea:lang(bg-bg),
    #cancel-comment-reply-link:lang(bg-bg),
    h1:lang(bg-bg),
    h2:lang(bg-bg),
    h3:lang(bg-bg),
    h4:lang(bg-bg),
    h5:lang(bg-bg),
    h6:lang(bg-bg),
    blockquote cite:lang(bg-bg),
    table:lang(bg-bg),
    input:lang(bg-bg)[type="button"],
    input:lang(bg-bg)[type="reset"],
    input:lang(bg-bg)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(kk),
    button:lang(kk),
    input:lang(kk),
    select:lang(kk),
    optgroup:lang(kk),
    textarea:lang(kk),
    #cancel-comment-reply-link:lang(kk),
    h1:lang(kk),
    h2:lang(kk),
    h3:lang(kk),
    h4:lang(kk),
    h5:lang(kk),
    h6:lang(kk),
    blockquote cite:lang(kk),
    table:lang(kk),
    input:lang(kk)[type="button"],
    input:lang(kk)[type="reset"],
    input:lang(kk)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(mk-mk),
    button:lang(mk-mk),
    input:lang(mk-mk),
    select:lang(mk-mk),
    optgroup:lang(mk-mk),
    textarea:lang(mk-mk),
    #cancel-comment-reply-link:lang(mk-mk),
    h1:lang(mk-mk),
    h2:lang(mk-mk),
    h3:lang(mk-mk),
    h4:lang(mk-mk),
    h5:lang(mk-mk),
    h6:lang(mk-mk),
    blockquote cite:lang(mk-mk),
    table:lang(mk-mk),
    input:lang(mk-mk)[type="button"],
    input:lang(mk-mk)[type="reset"],
    input:lang(mk-mk)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(mn),
    button:lang(mn),
    input:lang(mn),
    select:lang(mn),
    optgroup:lang(mn),
    textarea:lang(mn),
    #cancel-comment-reply-link:lang(mn),
    h1:lang(mn),
    h2:lang(mn),
    h3:lang(mn),
    h4:lang(mn),
    h5:lang(mn),
    h6:lang(mn),
    blockquote cite:lang(mn),
    table:lang(mn),
    input:lang(mn)[type="button"],
    input:lang(mn)[type="reset"],
    input:lang(mn)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(ru-ru),
    button:lang(ru-ru),
    input:lang(ru-ru),
    select:lang(ru-ru),
    optgroup:lang(ru-ru),
    textarea:lang(ru-ru),
    #cancel-comment-reply-link:lang(ru-ru),
    h1:lang(ru-ru),
    h2:lang(ru-ru),
    h3:lang(ru-ru),
    h4:lang(ru-ru),
    h5:lang(ru-ru),
    h6:lang(ru-ru),
    blockquote cite:lang(ru-ru),
    table:lang(ru-ru),
    input:lang(ru-ru)[type="button"],
    input:lang(ru-ru)[type="reset"],
    input:lang(ru-ru)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(sah),
    button:lang(sah),
    input:lang(sah),
    select:lang(sah),
    optgroup:lang(sah),
    textarea:lang(sah),
    #cancel-comment-reply-link:lang(sah),
    h1:lang(sah),
    h2:lang(sah),
    h3:lang(sah),
    h4:lang(sah),
    h5:lang(sah),
    h6:lang(sah),
    blockquote cite:lang(sah),
    table:lang(sah),
    input:lang(sah)[type="button"],
    input:lang(sah)[type="reset"],
    input:lang(sah)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(sr-rs),
    button:lang(sr-rs),
    input:lang(sr-rs),
    select:lang(sr-rs),
    optgroup:lang(sr-rs),
    textarea:lang(sr-rs),
    #cancel-comment-reply-link:lang(sr-rs),
    h1:lang(sr-rs),
    h2:lang(sr-rs),
    h3:lang(sr-rs),
    h4:lang(sr-rs),
    h5:lang(sr-rs),
    h6:lang(sr-rs),
    blockquote cite:lang(sr-rs),
    table:lang(sr-rs),
    input:lang(sr-rs)[type="button"],
    input:lang(sr-rs)[type="reset"],
    input:lang(sr-rs)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(tt-ru),
    button:lang(tt-ru),
    input:lang(tt-ru),
    select:lang(tt-ru),
    optgroup:lang(tt-ru),
    textarea:lang(tt-ru),
    #cancel-comment-reply-link:lang(tt-ru),
    h1:lang(tt-ru),
    h2:lang(tt-ru),
    h3:lang(tt-ru),
    h4:lang(tt-ru),
    h5:lang(tt-ru),
    h6:lang(tt-ru),
    blockquote cite:lang(tt-ru),
    table:lang(tt-ru),
    input:lang(tt-ru)[type="button"],
    input:lang(tt-ru)[type="reset"],
    input:lang(tt-ru)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(uk),
    button:lang(uk),
    input:lang(uk),
    select:lang(uk),
    optgroup:lang(uk),
    textarea:lang(uk),
    #cancel-comment-reply-link:lang(uk),
    h1:lang(uk),
    h2:lang(uk),
    h3:lang(uk),
    h4:lang(uk),
    h5:lang(uk),
    h6:lang(uk),
    blockquote cite:lang(uk),
    table:lang(uk),
    input:lang(uk)[type="button"],
    input:lang(uk)[type="reset"],
    input:lang(uk)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    body:lang(zh-hk),
    button:lang(zh-hk),
    input:lang(zh-hk),
    select:lang(zh-hk),
    optgroup:lang(zh-hk),
    textarea:lang(zh-hk),
    #cancel-comment-reply-link:lang(zh-hk),
    h1:lang(zh-hk),
    h2:lang(zh-hk),
    h3:lang(zh-hk),
    h4:lang(zh-hk),
    h5:lang(zh-hk),
    h6:lang(zh-hk),
    blockquote cite:lang(zh-hk),
    table:lang(zh-hk),
    input:lang(zh-hk)[type="button"],
    input:lang(zh-hk)[type="reset"],
    input:lang(zh-hk)[type="submit"] {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    body:lang(zh-tw),
    button:lang(zh-tw),
    input:lang(zh-tw),
    select:lang(zh-tw),
    optgroup:lang(zh-tw),
    textarea:lang(zh-tw),
    #cancel-comment-reply-link:lang(zh-tw),
    h1:lang(zh-tw),
    h2:lang(zh-tw),
    h3:lang(zh-tw),
    h4:lang(zh-tw),
    h5:lang(zh-tw),
    h6:lang(zh-tw),
    blockquote cite:lang(zh-tw),
    table:lang(zh-tw),
    input:lang(zh-tw)[type="button"],
    input:lang(zh-tw)[type="reset"],
    input:lang(zh-tw)[type="submit"] {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    body:lang(zh-cn),
    button:lang(zh-cn),
    input:lang(zh-cn),
    select:lang(zh-cn),
    optgroup:lang(zh-cn),
    textarea:lang(zh-cn),
    #cancel-comment-reply-link:lang(zh-cn),
    h1:lang(zh-cn),
    h2:lang(zh-cn),
    h3:lang(zh-cn),
    h4:lang(zh-cn),
    h5:lang(zh-cn),
    h6:lang(zh-cn),
    blockquote cite:lang(zh-cn),
    table:lang(zh-cn),
    input:lang(zh-cn)[type="button"],
    input:lang(zh-cn)[type="reset"],
    input:lang(zh-cn)[type="submit"] {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    body:lang(bn-bd),
    button:lang(bn-bd),
    input:lang(bn-bd),
    select:lang(bn-bd),
    optgroup:lang(bn-bd),
    textarea:lang(bn-bd),
    #cancel-comment-reply-link:lang(bn-bd),
    h1:lang(bn-bd),
    h2:lang(bn-bd),
    h3:lang(bn-bd),
    h4:lang(bn-bd),
    h5:lang(bn-bd),
    h6:lang(bn-bd),
    blockquote cite:lang(bn-bd),
    table:lang(bn-bd),
    input:lang(bn-bd)[type="button"],
    input:lang(bn-bd)[type="reset"],
    input:lang(bn-bd)[type="submit"] {
        font-family: Arial, sans-serif;
    }

    body:lang(hi-in),
    button:lang(hi-in),
    input:lang(hi-in),
    select:lang(hi-in),
    optgroup:lang(hi-in),
    textarea:lang(hi-in),
    #cancel-comment-reply-link:lang(hi-in),
    h1:lang(hi-in),
    h2:lang(hi-in),
    h3:lang(hi-in),
    h4:lang(hi-in),
    h5:lang(hi-in),
    h6:lang(hi-in),
    blockquote cite:lang(hi-in),
    table:lang(hi-in),
    input:lang(hi-in)[type="button"],
    input:lang(hi-in)[type="reset"],
    input:lang(hi-in)[type="submit"] {
        font-family: Arial, sans-serif;
    }

    body:lang(mr),
    button:lang(mr),
    input:lang(mr),
    select:lang(mr),
    optgroup:lang(mr),
    textarea:lang(mr),
    #cancel-comment-reply-link:lang(mr),
    h1:lang(mr),
    h2:lang(mr),
    h3:lang(mr),
    h4:lang(mr),
    h5:lang(mr),
    h6:lang(mr),
    blockquote cite:lang(mr),
    table:lang(mr),
    input:lang(mr)[type="button"],
    input:lang(mr)[type="reset"],
    input:lang(mr)[type="submit"] {
        font-family: Arial, sans-serif;
    }

    body:lang(ne-np),
    button:lang(ne-np),
    input:lang(ne-np),
    select:lang(ne-np),
    optgroup:lang(ne-np),
    textarea:lang(ne-np),
    #cancel-comment-reply-link:lang(ne-np),
    h1:lang(ne-np),
    h2:lang(ne-np),
    h3:lang(ne-np),
    h4:lang(ne-np),
    h5:lang(ne-np),
    h6:lang(ne-np),
    blockquote cite:lang(ne-np),
    table:lang(ne-np),
    input:lang(ne-np)[type="button"],
    input:lang(ne-np)[type="reset"],
    input:lang(ne-np)[type="submit"] {
        font-family: Arial, sans-serif;
    }

    body:lang(el),
    button:lang(el),
    input:lang(el),
    select:lang(el),
    optgroup:lang(el),
    textarea:lang(el),
    #cancel-comment-reply-link:lang(el),
    h1:lang(el),
    h2:lang(el),
    h3:lang(el),
    h4:lang(el),
    h5:lang(el),
    h6:lang(el),
    blockquote cite:lang(el),
    table:lang(el),
    input:lang(el)[type="button"],
    input:lang(el)[type="reset"],
    input:lang(el)[type="submit"] {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    body:lang(gu),
    button:lang(gu),
    input:lang(gu),
    select:lang(gu),
    optgroup:lang(gu),
    textarea:lang(gu),
    #cancel-comment-reply-link:lang(gu),
    h1:lang(gu),
    h2:lang(gu),
    h3:lang(gu),
    h4:lang(gu),
    h5:lang(gu),
    h6:lang(gu),
    blockquote cite:lang(gu),
    table:lang(gu),
    input:lang(gu)[type="button"],
    input:lang(gu)[type="reset"],
    input:lang(gu)[type="submit"] {
        font-family: Arial, sans-serif;
    }

    body:lang(he-il),
    button:lang(he-il),
    input:lang(he-il),
    select:lang(he-il),
    optgroup:lang(he-il),
    textarea:lang(he-il),
    #cancel-comment-reply-link:lang(he-il),
    h1:lang(he-il),
    h2:lang(he-il),
    h3:lang(he-il),
    h4:lang(he-il),
    h5:lang(he-il),
    h6:lang(he-il),
    blockquote cite:lang(he-il),
    table:lang(he-il),
    input:lang(he-il)[type="button"],
    input:lang(he-il)[type="reset"],
    input:lang(he-il)[type="submit"] {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    body:lang(ja),
    button:lang(ja),
    input:lang(ja),
    select:lang(ja),
    optgroup:lang(ja),
    textarea:lang(ja),
    #cancel-comment-reply-link:lang(ja),
    h1:lang(ja),
    h2:lang(ja),
    h3:lang(ja),
    h4:lang(ja),
    h5:lang(ja),
    h6:lang(ja),
    blockquote cite:lang(ja),
    table:lang(ja),
    input:lang(ja)[type="button"],
    input:lang(ja)[type="reset"],
    input:lang(ja)[type="submit"] {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    body:lang(ko-kr),
    button:lang(ko-kr),
    input:lang(ko-kr),
    select:lang(ko-kr),
    optgroup:lang(ko-kr),
    textarea:lang(ko-kr),
    #cancel-comment-reply-link:lang(ko-kr),
    h1:lang(ko-kr),
    h2:lang(ko-kr),
    h3:lang(ko-kr),
    h4:lang(ko-kr),
    h5:lang(ko-kr),
    h6:lang(ko-kr),
    blockquote cite:lang(ko-kr),
    table:lang(ko-kr),
    input:lang(ko-kr)[type="button"],
    input:lang(ko-kr)[type="reset"],
    input:lang(ko-kr)[type="submit"] {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    body:lang(th),
    button:lang(th),
    input:lang(th),
    select:lang(th),
    optgroup:lang(th),
    textarea:lang(th),
    #cancel-comment-reply-link:lang(th),
    h1:lang(th),
    h2:lang(th),
    h3:lang(th),
    h4:lang(th),
    h5:lang(th),
    h6:lang(th),
    blockquote cite:lang(th),
    table:lang(th),
    input:lang(th)[type="button"],
    input:lang(th)[type="reset"],
    input:lang(th)[type="submit"] {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    body:lang(vi),
    button:lang(vi),
    input:lang(vi),
    select:lang(vi),
    optgroup:lang(vi),
    textarea:lang(vi),
    #cancel-comment-reply-link:lang(vi),
    h1:lang(vi),
    h2:lang(vi),
    h3:lang(vi),
    h4:lang(vi),
    h5:lang(vi),
    h6:lang(vi),
    blockquote cite:lang(vi),
    table:lang(vi),
    input:lang(vi)[type="button"],
    input:lang(vi)[type="reset"],
    input:lang(vi)[type="submit"] {
        font-family: "Libre Franklin", sans-serif;
    }

    /* Normalize */
    /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
    /* Document
	 ========================================================================== */
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

    /* Sections
	 ========================================================================== */
    /**
 * Remove the margin in all browsers.
 */
    body {
        margin: 0;
    }

    /**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    /* Grouping content
	 ========================================================================== */
    /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
    hr {
        box-sizing: content-box;
        /* 1 */
        height: 0;
        /* 1 */
        overflow: visible;
        /* 2 */
    }

    /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
    pre {
        font-family: monospace, monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
    }

    /* Text-level semantics
	 ========================================================================== */
    /**
 * Remove the gray background on active links in IE 10.
 */
    a {
        background-color: transparent;
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
 * 2. Correct the odd \`em\` font sizing in all browsers.
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
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
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

    /* Embedded content
	 ========================================================================== */
    /**
 * Remove the border on images inside links in IE 10.
 */
    img {
        border-style: none;
    }

    /* Forms
	 ========================================================================== */
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
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *		\`fieldset\` elements in all browsers.
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
 * 2. Change font properties to \`inherit\` in Safari.
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

    #cancel-comment-reply-link,
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        font-size: 2.25em;
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 2.8125em;
        }
    }

    h2 {
        font-size: 1.6875em;
    }

    @media only screen and (min-width: 768px) {
        h2 {
            font-size: 2.25em;
        }
    }

    h3 {
        font-size: 1.6875em;
    }

    h4 {
        font-size: 1.125em;
    }

    h5 {
        font-size: 0.88889em;
    }

    #cancel-comment-reply-link,
    img:after,
    h6 {
        font-size: 0.71111em;
    }

    blockquote {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }

    /* Do not hyphenate entry title on tablet view and bigger. */

    p {
        -webkit-font-smoothing: antialiased;
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

    pre {
        font-size: 0.88889em;
        font-family: "Courier 10 Pitch", Courier, monospace;
        line-height: 1.8;
        overflow: auto;
    }

    code,
    kbd,
    tt,
    var {
        font-size: 0.88889em;
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

    big {
        font-size: 125%;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    a:focus {
        text-decoration: underline;
    }

    /* Elements */
    html {
        box-sizing: border-box;
    }

    ::-moz-selection {
        background-color: #bfdcea;
    }

    ::selection {
        background-color: #bfdcea;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        background-color: #fff;
    }

    a {
        transition: color 110ms ease-in-out;
        color: #0073aa;
    }

    a:hover,
    a:active {
        color: #005177;
        outline: 0;
        text-decoration: none;
    }

    a:focus {
        outline: thin;
        outline-style: dotted;
        text-decoration: underline;
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

    h1:not(.${siteTitle}):before,
    h2:before {
        background: #767676;
        content: "\\020";
        display: block;
        height: 2px;
        margin: 1rem 0;
        width: 1em;
    }

    hr {
        background-color: #767676;
        border: 0;
        height: 2px;
    }

    ul,
    ol {
        padding-left: 1rem;
    }

    ul {
        list-style: disc;
    }

    ul ul {
        list-style-type: circle;
    }

    ol {
        list-style: decimal;
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
        margin: 0 1rem 1rem;
    }

    img {
        height: auto;
        max-width: 100%;
        position: relative;
    }

    figure {
        margin: 0;
    }

    blockquote {
        border-left: 2px solid #0073aa;
        margin-left: 0;
        padding: 0 0 0 1rem;
    }

    blockquote > p {
        margin: 0 0 1rem;
    }

    blockquote cite {
        color: #767676;
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
        padding: 0.5em;
        border: 1px solid #767676;
        word-break: break-all;
    }

    /* Forms */
    button,
    input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        transition: background 150ms ease-in-out;
        background: #0073aa;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: 0.88889em;
        font-weight: 700;
        line-height: 1.2;
        outline: none;
        padding: 0.76rem 1rem;
        text-decoration: none;
        vertical-align: bottom;
    }

    button:hover,
    input[type="button"]:hover,
    input[type="reset"]:hover,
    input[type="submit"]:hover {
        background: #111;
        cursor: pointer;
    }

    button:visited,
    input[type="button"]:visited,
    input[type="reset"]:visited,
    input[type="submit"]:visited {
        color: #fff;
        text-decoration: none;
    }

    button:focus,
    input[type="button"]:focus,
    input[type="reset"]:focus,
    input[type="submit"]:focus {
        background: #111;
        outline: thin dotted;
        outline-offset: -4px;
    }

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
        -webkit-backface-visibility: hidden;
        background: #fff;
        border: solid 1px #ccc;
        box-sizing: border-box;
        outline: none;
        padding: 0.36rem 0.66rem;
        -webkit-appearance: none;
        outline-offset: 0;
        border-radius: 0;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="url"]:focus,
    input[type="password"]:focus,
    input[type="search"]:focus,
    input[type="number"]:focus,
    input[type="tel"]:focus,
    input[type="range"]:focus,
    input[type="date"]:focus,
    input[type="month"]:focus,
    input[type="week"]:focus,
    input[type="time"]:focus,
    input[type="datetime"]:focus,
    input[type="datetime-local"]:focus,
    input[type="color"]:focus,
    textarea:focus {
        border-color: #0073aa;
        outline: thin solid rgba(0, 115, 170, 0.15);
        outline-offset: -4px;
    }

    input[type="search"]::-webkit-search-decoration {
        display: none;
    }

    textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        max-width: 100%;
        resize: vertical;
    }

    form p {
        margin: 1rem 0;
    }

    /* Navigation */
    /*--------------------------------------------------------------
## Links
--------------------------------------------------------------*/
    a {
        transition: color 110ms ease-in-out;
        color: #0073aa;
    }

    a:visited {
        color: #0073aa;
    }

    a:hover,
    a:active {
        color: #005177;
        outline: 0;
        text-decoration: none;
    }

    a:focus {
        outline: thin dotted;
        text-decoration: underline;
    }

    /*--------------------------------------------------------------
## Menus
--------------------------------------------------------------*/
    /** === Main menu === */

    /* Menu animation */
    @keyframes slide_in_right {
        100% {
            transform: translateX(0%);
        }
    }

    @keyframes fade_in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* Social menu */

    /** === Footer menu === */

    /*--------------------------------------------------------------
## Next / Previous
--------------------------------------------------------------*/
    /* Next/Previous navigation */

    /* Accessibility */
    /* Text meant only for screen readers. */

    /* Do not show the outline on the skip link target. */
    #content[tabindex="-1"]:focus {
        outline: 0;
    }

    /* Alignments */

    /* Clearings */

    /* Layout */
    /** === Layout === */
    #page {
        width: 100%;
    }

    /* Content */
    /*--------------------------------------------------------------
## Header
--------------------------------------------------------------*/

    /*--------------------------------------------------------------
## Posts and pages
--------------------------------------------------------------*/

    /* Author description */

    /*--------------------------------------------------------------
## Comments
--------------------------------------------------------------*/

    #comment {
        max-width: 100%;
        box-sizing: border-box;
    }

    #respond {
        position: relative;
    }

    #respond > small {
        display: block;
        font-size: 22px;
        position: absolute;
        left: calc(1rem + 100%);
        top: calc(-3.5 * 1rem);
        width: calc(100vw / 12);
    }

    #cancel-comment-reply-link {
        font-weight: 500;
    }

    #cancel-comment-reply-link:hover {
        color: #005177;
    }

    /*--------------------------------------------------------------
## Archives
--------------------------------------------------------------*/

    /* 404 & Not found */

    /*--------------------------------------------------------------
## Footer
--------------------------------------------------------------*/
    /* Site footer */

    /* Widgets */

    /* Blocks */
    /* !Block styles */

    /*
 * Unset nested content selector styles
 * - Prevents layout styles from cascading too deeply
 * - helps with plugin compatibility
 */

    /* Media */

    embed,
    iframe,
    object {
        max-width: 100%;
    }

    svg {
        transition: fill 120ms ease-in-out;
        fill: currentColor;
    }

    /*--------------------------------------------------------------
## Captions
--------------------------------------------------------------*/

    /*--------------------------------------------------------------
## Galleries
--------------------------------------------------------------*/

    /* Pagination */
`;

export const mainNavigation = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    & ul.main-menu > li {
        line-height: 1.25;
    }

    font-size: 1.125em;

    display: block;
    margin-top: 0.25rem;
    /* Un-style buttons */
    /*
	 * Sub-menu styles
	 *
	 * :focus-within needs its own selector so other similar
	 * selectors don’t get ignored if a browser doesn’t recognize it
	 */
    /**
	 * Fade-in animation for top-level submenus
	 */
    /**
	 * Off-canvas touch device styles
	 */

    & > div {
        display: inline;
    }

    & button {
        display: inline-block;
        border: none;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-weight: 700;
        line-height: 1.2;
        text-decoration: none;
        background: transparent;
        color: inherit;
        cursor: pointer;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    & button:hover,
    & button:focus {
        background: transparent;
    }

    & button:focus {
        outline: 1px solid transparent;
        outline-offset: -4px;
    }

    & button:active {
        transform: scale(0.99);
    }

    & .main-menu {
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    & .main-menu > li {
        color: #0073aa;
        display: inline;
        position: relative;
    }

    & .main-menu > li > a {
        font-weight: 700;
        color: #0073aa;
        margin-right: 0.5rem;
    }

    & .main-menu > li > a + svg {
        margin-right: 0.5rem;
    }

    & .main-menu > li > a:hover,
    & .main-menu > li > a:hover + svg {
        color: #005177;
    }

    & .main-menu > li.menu-item-has-children {
        display: inline-block;
        position: inherit;
    }

    @media only screen and (min-width: 768px) {
        & .main-menu > li.menu-item-has-children {
            position: relative;
        }
    }

    & .main-menu > li.menu-item-has-children > a {
        margin-right: 0.125rem;
    }

    & .main-menu > li.menu-item-has-children > a:after,
    & .main-menu > li.menu-item-has-children .menu-item-has-children > a:after {
        content: "";
        display: none;
    }

    & .main-menu > li.menu-item-has-children .submenu-expand {
        display: inline-block;
        margin-right: 0.25rem;
        /* Priority+ Menu */
    }

    &
        .main-menu
        > li.menu-item-has-children
        .submenu-expand.main-menu-more-toggle {
        position: relative;
        height: 24px;
        line-height: 1.2;
        width: 24px;
        padding: 0;
        margin-left: 0.5rem;
    }

    &
        .main-menu
        > li.menu-item-has-children
        .submenu-expand.main-menu-more-toggle
        svg {
        height: 24px;
        width: 24px;
        top: -0.125rem;
        vertical-align: text-bottom;
    }

    & .main-menu > li.menu-item-has-children .submenu-expand.is-empty {
        display: none;
    }

    & .main-menu > li.menu-item-has-children .submenu-expand svg {
        position: relative;
        top: 0.2rem;
    }

    & .main-menu > li:last-child > a,
    & .main-menu > li:last-child.menu-item-has-children .submenu-expand {
        margin-right: 0;
    }

    & .sub-menu {
        background-color: #0073aa;
        color: #fff;
        list-style: none;
        padding-left: 0;
        position: absolute;
        opacity: 0;
        left: -9999px;
        z-index: 99999;
    }

    @media only screen and (min-width: 768px) {
        & .sub-menu {
            width: auto;
            min-width: -moz-max-content;
            min-width: -webkit-max-content;
            min-width: max-content;
        }
    }

    & .sub-menu > li {
        display: block;
        float: none;
        position: relative;
    }

    & .sub-menu > li.menu-item-has-children .submenu-expand {
        display: inline-block;
        position: absolute;
        width: calc(24px + 1rem);
        right: 0;
        top: calc(0.125 * 1rem);
        bottom: 0;
        color: white;
        line-height: 1;
        padding: calc(0.5 * 1rem);
    }

    & .sub-menu > li.menu-item-has-children .submenu-expand svg {
        top: 0;
    }

    & .sub-menu > li.menu-item-has-children .submenu-expand {
        margin-right: 0;
    }

    @media only screen and (min-width: 768px) {
        &
            .sub-menu
            > li.menu-item-has-children
            .menu-item-has-children
            > a:after {
            content: "\\203a";
        }
    }

    & .sub-menu > li > a,
    & .sub-menu > li > .menu-item-link-return {
        color: #fff;
        display: block;
        line-height: 1.2;
        text-shadow: none;
        padding: calc(0.5 * 1rem) calc(24px + 1rem) calc(0.5 * 1rem) 1rem;
        white-space: nowrap;
    }

    & .sub-menu > li > a:hover,
    & .sub-menu > li > a:focus,
    & .sub-menu > li > .menu-item-link-return:hover,
    & .sub-menu > li > .menu-item-link-return:focus {
        background: #005177;
    }

    & .sub-menu > li > a:hover:after,
    & .sub-menu > li > a:focus:after,
    & .sub-menu > li > .menu-item-link-return:hover:after,
    & .sub-menu > li > .menu-item-link-return:focus:after {
        background: #005177;
    }

    & .sub-menu > li > .menu-item-link-return {
        width: 100%;
        font-size: 22px;
        font-weight: normal;
        text-align: left;
    }

    & .sub-menu > li > a:empty {
        display: none;
    }

    & .sub-menu > li.mobile-parent-nav-menu-item {
        display: none;
        font-size: 0.88889em;
        font-weight: normal;
    }

    & .sub-menu > li.mobile-parent-nav-menu-item svg {
        position: relative;
        top: 0.2rem;
        margin-right: calc(0.25 * 1rem);
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas)[focus-within]
        > .sub-menu {
        display: block;
        left: 0;
        margin-top: 0;
        opacity: 1;
        width: auto;
        min-width: 100%;
        /* Non-mobile position */
        /* Nested sub-menu dashes */
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus-within
        > .sub-menu {
        display: block;
        left: 0;
        margin-top: 0;
        opacity: 1;
        width: auto;
        min-width: 100%;
        /* Non-mobile position */
        /* Nested sub-menu dashes */
    }

    @media only screen and (min-width: 768px) {
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas)[focus-within]
            > .sub-menu {
            display: block;
            margin-top: 0;
            opacity: 1;
            position: absolute;
            left: 0;
            right: auto;
            top: auto;
            bottom: auto;
            height: auto;
            min-width: -moz-max-content;
            min-width: -webkit-max-content;
            min-width: max-content;
            transform: none;
        }

        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):focus-within
            > .sub-menu {
            display: block;
            margin-top: 0;
            opacity: 1;
            position: absolute;
            left: 0;
            right: auto;
            top: auto;
            bottom: auto;
            height: auto;
            min-width: -moz-max-content;
            min-width: -webkit-max-content;
            min-width: max-content;
            transform: none;
        }
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas)[focus-within]
        > .sub-menu.hidden-links {
        left: 0;
        width: 100%;
        display: table;
        position: absolute;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus-within
        > .sub-menu.hidden-links {
        left: 0;
        width: 100%;
        display: table;
        position: absolute;
    }

    @media only screen and (min-width: 768px) {
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas)[focus-within]
            > .sub-menu.hidden-links {
            right: 0;
            left: auto;
            display: block;
            width: max-content;
        }

        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):focus-within
            > .sub-menu.hidden-links {
            right: 0;
            left: auto;
            display: block;
            width: max-content;
        }
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas)[focus-within]
        > .sub-menu
        .submenu-expand {
        display: none;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus-within
        > .sub-menu
        .submenu-expand {
        display: none;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas)[focus-within]
        > .sub-menu
        .sub-menu {
        display: block;
        margin-top: inherit;
        position: relative;
        width: 100%;
        left: 0;
        opacity: 1;
        /* Non-mobile position */
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus-within
        > .sub-menu
        .sub-menu {
        display: block;
        margin-top: inherit;
        position: relative;
        width: 100%;
        left: 0;
        opacity: 1;
        /* Non-mobile position */
    }

    @media only screen and (min-width: 768px) {
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas)[focus-within]
            > .sub-menu
            .sub-menu {
            float: none;
            max-width: 100%;
        }

        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):focus-within
            > .sub-menu
            .sub-menu {
            float: none;
            max-width: 100%;
        }
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas)[focus-within]
        > .sub-menu
        .sub-menu {
        counter-reset: submenu;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus-within
        > .sub-menu
        .sub-menu {
        counter-reset: submenu;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas)[focus-within]
        > .sub-menu
        .sub-menu
        > li
        > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus-within
        > .sub-menu
        .sub-menu
        > li
        > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }

    & .main-menu .menu-item-has-children:not(.off-canvas):hover > .sub-menu,
    & .main-menu .menu-item-has-children:not(.off-canvas):focus > .sub-menu,
    &
        .main-menu
        .menu-item-has-children.is-focused:not(.off-canvas)
        > .sub-menu {
        display: block;
        left: 0;
        margin-top: 0;
        opacity: 1;
        width: auto;
        min-width: 100%;
        /* Non-mobile position */
        /* Nested sub-menu dashes */
    }

    @media only screen and (min-width: 768px) {
        & .main-menu .menu-item-has-children:not(.off-canvas):hover > .sub-menu,
        & .main-menu .menu-item-has-children:not(.off-canvas):focus > .sub-menu,
        &
            .main-menu
            .menu-item-has-children.is-focused:not(.off-canvas)
            > .sub-menu {
            display: block;
            float: none;
            margin-top: 0;
            opacity: 1;
            position: absolute;
            left: 0;
            right: auto;
            top: auto;
            bottom: auto;
            height: auto;
            min-width: -moz-max-content;
            min-width: -webkit-max-content;
            min-width: max-content;
            transform: none;
        }
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):hover
        > .sub-menu.hidden-links,
    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus
        > .sub-menu.hidden-links,
    &
        .main-menu
        .menu-item-has-children.is-focused:not(.off-canvas)
        > .sub-menu.hidden-links {
        left: 0;
        width: 100%;
        display: table;
        position: absolute;
    }

    @media only screen and (min-width: 768px) {
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):hover
            > .sub-menu.hidden-links,
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):focus
            > .sub-menu.hidden-links,
        &
            .main-menu
            .menu-item-has-children.is-focused:not(.off-canvas)
            > .sub-menu.hidden-links {
            right: 0;
            left: auto;
            display: table;
            width: max-content;
        }
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):hover
        > .sub-menu
        .submenu-expand,
    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus
        > .sub-menu
        .submenu-expand,
    &
        .main-menu
        .menu-item-has-children.is-focused:not(.off-canvas)
        > .sub-menu
        .submenu-expand {
        display: none;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):hover
        > .sub-menu
        .sub-menu,
    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus
        > .sub-menu
        .sub-menu,
    &
        .main-menu
        .menu-item-has-children.is-focused:not(.off-canvas)
        > .sub-menu
        .sub-menu {
        display: block;
        margin-top: inherit;
        position: relative;
        width: 100%;
        left: 0;
        opacity: 1;
        /* Non-mobile position */
    }

    @media only screen and (min-width: 768px) {
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):hover
            > .sub-menu
            .sub-menu,
        &
            .main-menu
            .menu-item-has-children:not(.off-canvas):focus
            > .sub-menu
            .sub-menu,
        &
            .main-menu
            .menu-item-has-children.is-focused:not(.off-canvas)
            > .sub-menu
            .sub-menu {
            float: none;
            max-width: 100%;
        }
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):hover
        > .sub-menu
        .sub-menu,
    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus
        > .sub-menu
        .sub-menu,
    &
        .main-menu
        .menu-item-has-children.is-focused:not(.off-canvas)
        > .sub-menu
        .sub-menu {
        counter-reset: submenu;
    }

    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):hover
        > .sub-menu
        .sub-menu
        > li
        > a::before,
    &
        .main-menu
        .menu-item-has-children:not(.off-canvas):focus
        > .sub-menu
        .sub-menu
        > li
        > a::before,
    &
        .main-menu
        .menu-item-has-children.is-focused:not(.off-canvas)
        > .sub-menu
        .sub-menu
        > li
        > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }

    & .main-menu > .menu-item-has-children:not(.off-canvas):hover > .sub-menu {
        animation: fade_in 0.1s forwards;
    }

    &
        .main-menu
        .menu-item-has-children.off-canvas
        .sub-menu
        .submenu-expand
        .svg-icon {
        transform: rotate(270deg);
    }

    & .main-menu .menu-item-has-children.off-canvas .sub-menu .sub-menu {
        opacity: 0;
        position: absolute;
        z-index: 0;
        transform: translateX(-100%);
    }

    & .main-menu .menu-item-has-children.off-canvas .sub-menu li:hover,
    & .main-menu .menu-item-has-children.off-canvas .sub-menu li:focus,
    & .main-menu .menu-item-has-children.off-canvas .sub-menu li > a:hover,
    & .main-menu .menu-item-has-children.off-canvas .sub-menu li > a:focus {
        background-color: transparent;
    }

    & .main-menu .menu-item-has-children.off-canvas .sub-menu > li > a,
    &
        .main-menu
        .menu-item-has-children.off-canvas
        .sub-menu
        > li
        > .menu-item-link-return {
        white-space: inherit;
    }

    & .main-menu .menu-item-has-children.off-canvas .sub-menu.expanded-true {
        display: table;
        margin-top: 0;
        opacity: 1;
        padding-left: 0;
        /* Mobile position */
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        z-index: 100000;
        /* Make sure appears above mobile admin bar */
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        transform: translateX(100%);
        animation: slide_in_right 0.3s forwards;
        /* Prevent menu from being blocked by admin bar */
    }

    &
        .main-menu
        .menu-item-has-children.off-canvas
        .sub-menu.expanded-true
        > .mobile-parent-nav-menu-item {
        display: block;
    }

    & .main-menu-more:nth-child(n + 3) {
        display: none;
    }
`;

export const adminBar = css`
    &
        .${mainNavigation}
        .main-menu
        .menu-item-has-children.off-canvas
        .sub-menu.expanded-true {
        top: 46px;
        height: calc(100vh - 46px);
        /* WP core breakpoint */
    }

    &
        .${mainNavigation}
        .main-menu
        .menu-item-has-children.off-canvas
        .sub-menu.expanded-true
        .sub-menu.expanded-true {
        top: 0;
    }

    @media only screen and (min-width: 782px) {
        &
            .${mainNavigation}
            .main-menu
            .menu-item-has-children.off-canvas
            .sub-menu.expanded-true {
            top: 32px;
            height: calc(100vh - 32px);
        }

        &
            .${mainNavigation}
            .main-menu
            .menu-item-has-children.off-canvas
            .sub-menu.expanded-true
            .sub-menu.expanded-true {
            top: 0;
        }
    }
`;

export const aligncenter = css`
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const alignleft = css`
    /*rtl:ignore*/
    float: left;
    /*rtl:ignore*/
    margin-right: 1rem;

    @media only screen and (min-width: 768px) {
        & {
            /*rtl:ignore*/
            margin-right: calc(2 * 1rem);
        }
    }
`;

export const alignright = css`
    /*rtl:ignore*/
    float: right;
    /*rtl:ignore*/
    margin-left: 1rem;

    @media only screen and (min-width: 768px) {
        & {
            /*rtl:ignore*/
            margin-left: calc(2 * 1rem);
        }
    }
`;

export const pageTitle = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: "NonBreakingSpaceOverride", "Hoefler Text",
        "Baskerville Old Face", Garamond, "Times New Roman", serif;

    font-size: 1.125em;

    font-weight: normal;
`;

export const pageDescription = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.125em;

    font-weight: bold;
`;

export const archive = css`
    & .page-header {
        margin: 1rem 1rem calc(3 * 1rem);
    }

    @media only screen and (min-width: 768px) {
        & .page-header {
            margin: 0 calc(10% + 60px) calc(10% + 60px);
        }
    }

    & .page-header .${pageTitle} {
        color: #767676;
        display: inline;
        letter-spacing: normal;
    }

    & .page-header .${pageTitle}:before {
        display: none;
    }

    & .page-header .search-term,
    & .page-header .${pageDescription} {
        display: inherit;
        clear: both;
    }

    & .page-header .search-term:after,
    & .page-header .${pageDescription}:after {
        content: ".";
        font-weight: bold;
        color: #767676;
    }

    & .page-header .${pageDescription} {
        display: block;
        color: #111;
        font-size: 1em;
    }
`;

export const authorTitle = css`
    h2& {
        font-size: 1.125em;
    }
`;

export const authorDescription = css`
    & .author-link:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .author-link:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .author-link:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .author-link:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .author-link:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .author-link:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .author-link:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .author-link:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .author-link:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .author-link:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .author-link:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .author-link:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .author-link:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .author-link:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .author-link:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .author-link:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .author-link {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .author-link {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    & .${authorBio} {
        line-height: 1.25;
    }
`;

export const authorBio = css`
    p& {
        font-size: 1.125em;
    }

    margin: calc(2 * 1rem) 1rem 1rem;

    @media only screen and (min-width: 768px) {
        & {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        & {
            margin: calc(3 * 1rem) calc(10% + 60px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & {
            margin: calc(3 * 1rem) calc(10% + 60px);
        }
    }

    & .${authorTitle} {
        display: inline;
    }

    & .${authorTitle}:before {
        background: #767676;
        content: "\\020";
        display: block;
        height: 2px;
        margin: 1rem 0;
        width: 1em;
    }

    & .${authorDescription} {
        display: inline;
        color: #767676;
        font-size: 1.125em;
        line-height: 1.2;
    }

    & .${authorDescription} .author-link {
        display: inline-block;
    }

    & .${authorDescription} .author-link:hover {
        color: #005177;
        text-decoration: none;
    }
`;

export const avatar = css`
    border-radius: 100%;
    display: block;
    height: calc(2.25 * 1rem);
    min-height: inherit;
    width: calc(2.25 * 1rem);
`;

export const button = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    transition: background 150ms ease-in-out;
    background: #0073aa;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    font-size: 0.88889em;
    font-weight: 700;
    line-height: 1.2;
    outline: none;
    padding: 0.76rem 1rem;
    text-decoration: none;
    vertical-align: bottom;

    &:hover {
        background: #111;
        cursor: pointer;
    }

    &:visited {
        color: #fff;
        text-decoration: none;
    }

    &:focus {
        background: #111;
        outline: thin dotted;
        outline-offset: -4px;
    }
`;

export const bypostauthor = css`
    display: block;
`;

export const clear = css`
    &:before,
    &:after {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &:after {
        clear: both;
    }
`;

export const commentForm = css`
    & .${commentNotes}:lang(ar),
    & label:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(ary),
    & label:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(azb),
    & label:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(ckb),
    & label:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(fa-IR),
    & label:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(haz),
    & label:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(ps),
    & label:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${commentNotes}:lang(be),
    & label:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(bg-BG),
    & label:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(kk),
    & label:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(mk-MK),
    & label:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(mn),
    & label:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(ru-RU),
    & label:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(sah),
    & label:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(sr-RS),
    & label:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(tt-RU),
    & label:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(uk),
    & label:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${commentNotes}:lang(zh-HK),
    & label:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${commentNotes}:lang(zh-TW),
    & label:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${commentNotes}:lang(zh-CN),
    & label:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${commentNotes}:lang(bn-BD),
    & label:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .${commentNotes}:lang(hi-IN),
    & label:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .${commentNotes}:lang(mr),
    & label:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .${commentNotes}:lang(ne-NP),
    & label:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .${commentNotes}:lang(el),
    & label:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .${commentNotes}:lang(gu),
    & label:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .${commentNotes}:lang(he-IL),
    & label:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .${commentNotes}:lang(ja),
    & label:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .${commentNotes}:lang(ko-KR),
    & label:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .${commentNotes}:lang(th),
    & label:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .${commentNotes}:lang(vi),
    & label:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .${commentNotes}, & label {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: 0.71111em;
        color: #767676;
    }

    @media only screen and (min-width: 768px) {
        & .comment-form-author,
        & .comment-form-email {
            width: calc(50% - 0.5rem);
            float: left;
        }
    }

    @media only screen and (min-width: 768px) {
        & .comment-form-email {
            margin-left: 1rem;
        }
    }

    & input[name="author"],
    & input[name="email"],
    & input[name="url"] {
        display: block;
        width: 100%;
    }
`;

export const commentAuthor = css`
    & .fn:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .fn:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .fn:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .fn:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .fn:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .fn:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .fn:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .fn:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .fn:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .fn:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .fn:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .fn:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .fn:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .fn:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .fn:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .fn:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .fn {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .fn {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    & .fn {
        font-size: 1.125em;
    }
`;

export const commentMetadata = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;
`;

export const commentContent = css`
    font-size: 0.88889em;

    &:before,
    &:after {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &:after {
        clear: both;
    }

    & a {
        word-wrap: break-word;
    }

    & .wp-smiley {
        border: none;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
    }
`;

export const comment = css`
    #respond & .${commentForm} {
        padding-left: 0;
    }

    list-style: none;
    position: relative;

    @media only screen and (min-width: 768px) {
        & {
            padding-left: calc(0.5 * (1rem + calc(100vw / 12)));
        }

        &.depth-1,
        & .children {
            padding-left: 0;
        }

        &.depth-1 {
            margin-left: calc(3.25 * 1rem);
        }
    }

    & .comment-body {
        margin: calc(2 * 1rem) 0 0;
    }

    & .comment-meta {
        position: relative;
    }

    & .${commentAuthor} .${avatar} {
        float: left;
        margin-right: 1rem;
        position: relative;
    }

    @media only screen and (min-width: 768px) {
        & .${commentAuthor} .${avatar} {
            float: inherit;
            margin-right: inherit;
            position: absolute;
            top: 0;
            right: calc(100% + 1rem);
        }
    }

    & .${commentAuthor} .fn {
        position: relative;
        display: block;
    }

    & .${commentAuthor} .fn a {
        color: inherit;
    }

    & .${commentAuthor} .fn a:hover {
        color: #005177;
    }

    & .${commentAuthor} .post-author-badge {
        border-radius: 100%;
        display: block;
        height: 18px;
        position: absolute;
        background: #008fd3;
        right: calc(100% - 2.5rem);
        top: -3px;
        width: 18px;
    }

    @media only screen and (min-width: 768px) {
        & .${commentAuthor} .post-author-badge {
            right: calc(100% + 0.75rem);
        }
    }

    & .${commentAuthor} .post-author-badge svg {
        width: inherit;
        height: inherit;
        display: block;
        fill: white;
        transform: scale(0.875);
    }

    & .${commentMetadata} > a,
    & .${commentMetadata} .comment-edit-link {
        display: inline;
        font-weight: 500;
        color: #767676;
        vertical-align: baseline;
    }

    & .${commentMetadata} > a time,
    & .${commentMetadata} .comment-edit-link time {
        vertical-align: baseline;
    }

    & .${commentMetadata} > a:hover,
    & .${commentMetadata} .comment-edit-link:hover {
        color: #005177;
        text-decoration: none;
    }

    & .${commentMetadata} > * {
        display: inline-block;
    }

    & .${commentMetadata} .edit-link-sep {
        color: #767676;
        margin: 0 0.2em;
        vertical-align: baseline;
    }

    & .${commentMetadata} .edit-link {
        color: #767676;
    }

    & .${commentMetadata} .edit-link svg {
        transform: scale(0.8);
        vertical-align: baseline;
        margin-right: 0.1em;
    }

    & .${commentMetadata} .comment-edit-link {
        position: relative;
        padding-left: 1rem;
        margin-left: -1rem;
        z-index: 1;
    }

    & .${commentMetadata} .comment-edit-link:hover {
        color: #0073aa;
    }

    & .${commentContent} {
        margin: 1rem 0;
    }

    @media only screen and (min-width: 1168px) {
        & .${commentContent} {
            padding-right: 1rem;
        }
    }

    & .${commentContent} > *:first-child {
        margin-top: 0;
    }

    & .${commentContent} > *:last-child {
        margin-bottom: 0;
    }

    & .${commentContent} blockquote {
        margin-left: 0;
    }

    & .${commentContent} a {
        text-decoration: underline;
    }

    & .${commentContent} a:hover {
        text-decoration: none;
    }
`;

export const commentNotes = css`
    font-size: 0.71111em;
`;

export const commentsTitle = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.6875em;

    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word;

    #comments > &:last-child {
        display: none;
    }
`;

export const commentFormFlex = css`
    display: flex;
    flex-direction: column;

    & .${commentsTitle} {
        display: none;
        margin: 0;
        order: 1;
    }

    & #respond {
        order: 2;
    }

    & #respond + .${commentsTitle} {
        display: block;
    }
`;

export const commentList = css`
    & .pingback .comment-body:lang(ar),
    & .trackback .comment-body:lang(ar),
    & .pingback .comment-body .comment-edit-link:lang(ar),
    & .trackback .comment-body .comment-edit-link:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(ary),
    & .trackback .comment-body:lang(ary),
    & .pingback .comment-body .comment-edit-link:lang(ary),
    & .trackback .comment-body .comment-edit-link:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(azb),
    & .trackback .comment-body:lang(azb),
    & .pingback .comment-body .comment-edit-link:lang(azb),
    & .trackback .comment-body .comment-edit-link:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(ckb),
    & .trackback .comment-body:lang(ckb),
    & .pingback .comment-body .comment-edit-link:lang(ckb),
    & .trackback .comment-body .comment-edit-link:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(fa-ir),
    & .trackback .comment-body:lang(fa-ir),
    & .pingback .comment-body .comment-edit-link:lang(fa-ir),
    & .trackback .comment-body .comment-edit-link:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(haz),
    & .trackback .comment-body:lang(haz),
    & .pingback .comment-body .comment-edit-link:lang(haz),
    & .trackback .comment-body .comment-edit-link:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(ps),
    & .trackback .comment-body:lang(ps),
    & .pingback .comment-body .comment-edit-link:lang(ps),
    & .trackback .comment-body .comment-edit-link:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(be),
    & .trackback .comment-body:lang(be),
    & .pingback .comment-body .comment-edit-link:lang(be),
    & .trackback .comment-body .comment-edit-link:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(bg-bg),
    & .trackback .comment-body:lang(bg-bg),
    & .pingback .comment-body .comment-edit-link:lang(bg-bg),
    & .trackback .comment-body .comment-edit-link:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(kk),
    & .trackback .comment-body:lang(kk),
    & .pingback .comment-body .comment-edit-link:lang(kk),
    & .trackback .comment-body .comment-edit-link:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(mk-mk),
    & .trackback .comment-body:lang(mk-mk),
    & .pingback .comment-body .comment-edit-link:lang(mk-mk),
    & .trackback .comment-body .comment-edit-link:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(mn),
    & .trackback .comment-body:lang(mn),
    & .pingback .comment-body .comment-edit-link:lang(mn),
    & .trackback .comment-body .comment-edit-link:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(ru-ru),
    & .trackback .comment-body:lang(ru-ru),
    & .pingback .comment-body .comment-edit-link:lang(ru-ru),
    & .trackback .comment-body .comment-edit-link:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(sah),
    & .trackback .comment-body:lang(sah),
    & .pingback .comment-body .comment-edit-link:lang(sah),
    & .trackback .comment-body .comment-edit-link:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(sr-rs),
    & .trackback .comment-body:lang(sr-rs),
    & .pingback .comment-body .comment-edit-link:lang(sr-rs),
    & .trackback .comment-body .comment-edit-link:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(tt-ru),
    & .trackback .comment-body:lang(tt-ru),
    & .pingback .comment-body .comment-edit-link:lang(tt-ru),
    & .trackback .comment-body .comment-edit-link:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(uk),
    & .trackback .comment-body:lang(uk),
    & .pingback .comment-body .comment-edit-link:lang(uk),
    & .trackback .comment-body .comment-edit-link:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(zh-hk),
    & .trackback .comment-body:lang(zh-hk),
    & .pingback .comment-body .comment-edit-link:lang(zh-hk),
    & .trackback .comment-body .comment-edit-link:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .pingback .comment-body:lang(zh-tw),
    & .trackback .comment-body:lang(zh-tw),
    & .pingback .comment-body .comment-edit-link:lang(zh-tw),
    & .trackback .comment-body .comment-edit-link:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .pingback .comment-body:lang(zh-cn),
    & .trackback .comment-body:lang(zh-cn),
    & .pingback .comment-body .comment-edit-link:lang(zh-cn),
    & .trackback .comment-body .comment-edit-link:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .pingback .comment-body:lang(bn-bd),
    & .trackback .comment-body:lang(bn-bd),
    & .pingback .comment-body .comment-edit-link:lang(bn-bd),
    & .trackback .comment-body .comment-edit-link:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .pingback .comment-body:lang(hi-in),
    & .trackback .comment-body:lang(hi-in),
    & .pingback .comment-body .comment-edit-link:lang(hi-in),
    & .trackback .comment-body .comment-edit-link:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .pingback .comment-body:lang(mr),
    & .trackback .comment-body:lang(mr),
    & .pingback .comment-body .comment-edit-link:lang(mr),
    & .trackback .comment-body .comment-edit-link:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .pingback .comment-body:lang(ne-np),
    & .trackback .comment-body:lang(ne-np),
    & .pingback .comment-body .comment-edit-link:lang(ne-np),
    & .trackback .comment-body .comment-edit-link:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .pingback .comment-body:lang(el),
    & .trackback .comment-body:lang(el),
    & .pingback .comment-body .comment-edit-link:lang(el),
    & .trackback .comment-body .comment-edit-link:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .pingback .comment-body:lang(gu),
    & .trackback .comment-body:lang(gu),
    & .pingback .comment-body .comment-edit-link:lang(gu),
    & .trackback .comment-body .comment-edit-link:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .pingback .comment-body:lang(he-il),
    & .trackback .comment-body:lang(he-il),
    & .pingback .comment-body .comment-edit-link:lang(he-il),
    & .trackback .comment-body .comment-edit-link:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .pingback .comment-body:lang(ja),
    & .trackback .comment-body:lang(ja),
    & .pingback .comment-body .comment-edit-link:lang(ja),
    & .trackback .comment-body .comment-edit-link:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .pingback .comment-body:lang(ko-kr),
    & .trackback .comment-body:lang(ko-kr),
    & .pingback .comment-body .comment-edit-link:lang(ko-kr),
    & .trackback .comment-body .comment-edit-link:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .pingback .comment-body:lang(th),
    & .trackback .comment-body:lang(th),
    & .pingback .comment-body .comment-edit-link:lang(th),
    & .trackback .comment-body .comment-edit-link:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .pingback .comment-body:lang(vi),
    & .trackback .comment-body:lang(vi),
    & .pingback .comment-body .comment-edit-link:lang(vi),
    & .trackback .comment-body .comment-edit-link:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    list-style: none;
    padding: 0;

    & .children {
        margin: 0;
        padding: 0 0 0 1rem;
    }

    & > .${comment}:first-child {
        margin-top: 0;
    }

    & .pingback .comment-body,
    & .trackback .comment-body {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: 0.71111em;
        font-weight: 500;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    & .pingback .comment-body a:not(.comment-edit-link),
    & .trackback .comment-body a:not(.comment-edit-link) {
        font-weight: bold;
        font-size: 19.55556px;
        line-height: 1.5;
        padding-right: 0.5rem;
        display: block;
    }

    & .pingback .comment-body .comment-edit-link,
    & .trackback .comment-body .comment-edit-link {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-weight: 500;
    }
`;

export const navLinks = css`
    line-height: 1.25;

    font-size: 1.125em;
`;

export const commentNavigation = css`
    & .nav-previous:lang(ar),
    & .nav-next:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(ary),
    & .nav-next:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(azb),
    & .nav-next:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(ckb),
    & .nav-next:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(fa-ir),
    & .nav-next:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(haz),
    & .nav-next:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(ps),
    & .nav-next:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .nav-previous:lang(be),
    & .nav-next:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(bg-bg),
    & .nav-next:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(kk),
    & .nav-next:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(mk-mk),
    & .nav-next:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(mn),
    & .nav-next:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(ru-ru),
    & .nav-next:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(sah),
    & .nav-next:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(sr-rs),
    & .nav-next:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(tt-ru),
    & .nav-next:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(uk),
    & .nav-next:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .nav-previous:lang(zh-hk),
    & .nav-next:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .nav-previous:lang(zh-tw),
    & .nav-next:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .nav-previous:lang(zh-cn),
    & .nav-next:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .nav-previous:lang(bn-bd),
    & .nav-next:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .nav-previous:lang(hi-in),
    & .nav-next:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .nav-previous:lang(mr),
    & .nav-next:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .nav-previous:lang(ne-np),
    & .nav-next:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .nav-previous:lang(el),
    & .nav-next:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .nav-previous:lang(gu),
    & .nav-next:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .nav-previous:lang(he-il),
    & .nav-next:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .nav-previous:lang(ja),
    & .nav-next:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .nav-previous:lang(ko-kr),
    & .nav-next:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .nav-previous:lang(th),
    & .nav-next:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .nav-previous:lang(vi),
    & .nav-next:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .${navLinks} {
        display: flex;
        flex-direction: row;
    }

    & .nav-previous,
    & .nav-next {
        min-width: 50%;
        width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-weight: bold;
    }

    & .nav-previous .secondary-text,
    & .nav-next .secondary-text {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        & .nav-previous .secondary-text,
        & .nav-next .secondary-text {
            display: inline;
        }
    }

    & .nav-previous svg,
    & .nav-next svg {
        vertical-align: middle;
        position: relative;
        margin: 0 -0.35em;
        top: -1px;
    }

    & .nav-next {
        text-align: right;
    }
`;

export const commentReplyLink = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;

    font-weight: 500;

    &:hover {
        color: #005177;
    }
`;

export const commentReply = css`
    #respond + & {
        display: none;
    }

    & .${commentReplyLink} {
        display: inline-block;
    }
`;

export const commentUserAvatar = css`
    #respond & {
        margin: 1rem 0 -1rem;
    }
`;

export const discussionMeta = css`
    & .${discussionMetaInfo} {
        margin: 0;
    }

    & .${discussionMetaInfo} .svg-icon {
        vertical-align: middle;
        fill: currentColor;
        transform: scale(0.6) scaleX(-1) translateY(-0.1em);
        margin-left: -0.25rem;
    }
`;

export const commentsArea = css`
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    margin: calc(2 * 1rem) 1rem;
    word-wrap: break-word;
    /* Add extra margin when the comments section is located immediately after the
	 * post itself (this happens on pages).
	 */

    @media only screen and (min-width: 768px) {
        & {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        & {
            margin: calc(3 * 1rem) calc(10% + 60px);
        }
    }

    & > * {
        margin-top: calc(2 * 1rem);
        margin-bottom: calc(2 * 1rem);
    }

    @media only screen and (min-width: 768px) {
        & > * {
            margin-top: calc(3 * 1rem);
            margin-bottom: calc(3 * 1rem);
        }
    }

    @media only screen and (min-width: 768px) {
        & .comments-title-wrap {
            align-items: baseline;
            display: flex;
            justify-content: space-between;
        }
    }

    & .comments-title-wrap .${commentsTitle} {
        margin: 0;
    }

    & .comments-title-wrap .${commentsTitle}:before {
        background: #767676;
        content: "\\020";
        display: block;
        height: 2px;
        margin: 1rem 0;
        width: 1em;
    }

    @media only screen and (min-width: 768px) {
        & .comments-title-wrap .${commentsTitle} {
            flex: 1 0 calc(3 * (100vw / 12));
        }
    }

    @media only screen and (min-width: 768px) {
        & .comments-title-wrap .${discussionMeta} {
            flex: 0 0 calc(2 * (100vw / 12));
            margin-left: 1rem;
        }
    }
`;

export const customLogoLink = css`
    display: inline-block;
`;

export const discussionAvatarList = css`
    content: "";
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;

    & li {
        position: relative;
        list-style: none;
        margin: 0 -8px 0 0;
        padding: 0;
        float: left;
    }

    & .${commentUserAvatar} img {
        height: calc(1.5 * 1rem);
        width: calc(1.5 * 1rem);
    }
`;

export const discussionMetaInfo = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;
`;

export const entryTitle = css`
    font-size: 1.6875em;

    @media only screen and (min-width: 768px) {
        & {
            font-size: 2.25em;
        }
    }

    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word;

    @media only screen and (min-width: 768px) {
        & {
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
        }
    }
`;

export const emptyFeaturedImage = css`
    & .entry-header {
        margin: calc(3 * 1rem) 1rem 1rem;
        position: relative;
    }

    @media only screen and (min-width: 768px) {
        & .entry-header {
            margin: calc(3 * 1rem) calc(10% + 60px) 0;
        }

        & .entry-header .${entryTitle} {
            padding-right: calc(1 * (100vw / 12) + 1rem);
        }

        /* Pagination */
    }
`;

export const entryContent = css`
    &:before,
    &:after {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &:after {
        clear: both;
    }

    & .wp-smiley {
        border: none;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
    }
`;

export const entryMeta = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;

    & a {
        color: #767676;
        text-decoration: none !important;
    }

    & a:hover,
    & a:focus {
        text-decoration: none;
        color: #0073aa;
    }
`;

export const entryFooter = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;

    & a {
        color: #767676;
        text-decoration: none !important;
    }
`;

export const pageLinks = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    & a {
        font-weight: bold;
    }

    clear: both;
    margin: 0 0 calc(1.5 * 1rem);
`;

export const hasSmallFontSize = css`
    font-size: 0.71111em;
`;

export const hasLargeFontSize = css`
    font-size: 1.6875em;
`;

export const entry = css`
    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ar),
    & .${entryContent} .wp-block-archives li:lang(ar),
    & .${entryContent} .wp-block-categories li:lang(ar),
    & .${entryContent} .wp-block-latest-posts li:lang(ar),
    & .${entryContent} .wp-block-verse:lang(ar),
    & .${entryContent} .has-drop-cap:lang(ar):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ar),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ar),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ar),
    & .${entryContent} .wp-block-cover-image h2:lang(ar),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ar),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ar),
    & .${entryContent} .wp-block-cover h2:lang(ar),
    & .${entryContent} .wp-block-audio figcaption:lang(ar),
    & .${entryContent} .wp-block-video figcaption:lang(ar),
    & .${entryContent} .wp-block-image figcaption:lang(ar),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ar),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ar),
    & .${entryContent} .wp-block-file:lang(ar),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ar),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ary),
    & .${entryContent} .wp-block-archives li:lang(ary),
    & .${entryContent} .wp-block-categories li:lang(ary),
    & .${entryContent} .wp-block-latest-posts li:lang(ary),
    & .${entryContent} .wp-block-verse:lang(ary),
    & .${entryContent} .has-drop-cap:lang(ary):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ary),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ary),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ary),
    & .${entryContent} .wp-block-cover-image h2:lang(ary),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ary),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ary),
    & .${entryContent} .wp-block-cover h2:lang(ary),
    & .${entryContent} .wp-block-audio figcaption:lang(ary),
    & .${entryContent} .wp-block-video figcaption:lang(ary),
    & .${entryContent} .wp-block-image figcaption:lang(ary),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ary),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ary),
    & .${entryContent} .wp-block-file:lang(ary),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ary),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(azb),
    & .${entryContent} .wp-block-archives li:lang(azb),
    & .${entryContent} .wp-block-categories li:lang(azb),
    & .${entryContent} .wp-block-latest-posts li:lang(azb),
    & .${entryContent} .wp-block-verse:lang(azb),
    & .${entryContent} .has-drop-cap:lang(azb):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(azb),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(azb),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(azb),
    & .${entryContent} .wp-block-cover-image h2:lang(azb),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(azb),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(azb),
    & .${entryContent} .wp-block-cover h2:lang(azb),
    & .${entryContent} .wp-block-audio figcaption:lang(azb),
    & .${entryContent} .wp-block-video figcaption:lang(azb),
    & .${entryContent} .wp-block-image figcaption:lang(azb),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(azb),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(azb),
    & .${entryContent} .wp-block-file:lang(azb),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(azb),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ckb),
    & .${entryContent} .wp-block-archives li:lang(ckb),
    & .${entryContent} .wp-block-categories li:lang(ckb),
    & .${entryContent} .wp-block-latest-posts li:lang(ckb),
    & .${entryContent} .wp-block-verse:lang(ckb),
    & .${entryContent} .has-drop-cap:lang(ckb):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ckb),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ckb),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ckb),
    & .${entryContent} .wp-block-cover-image h2:lang(ckb),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ckb),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ckb),
    & .${entryContent} .wp-block-cover h2:lang(ckb),
    & .${entryContent} .wp-block-audio figcaption:lang(ckb),
    & .${entryContent} .wp-block-video figcaption:lang(ckb),
    & .${entryContent} .wp-block-image figcaption:lang(ckb),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ckb),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ckb),
    & .${entryContent} .wp-block-file:lang(ckb),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ckb),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(fa-ir),
    & .${entryContent} .wp-block-archives li:lang(fa-ir),
    & .${entryContent} .wp-block-categories li:lang(fa-ir),
    & .${entryContent} .wp-block-latest-posts li:lang(fa-ir),
    & .${entryContent} .wp-block-verse:lang(fa-ir),
    & .${entryContent} .has-drop-cap:lang(fa-ir):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(fa-ir),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(fa-ir),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(fa-ir),
    & .${entryContent} .wp-block-cover-image h2:lang(fa-ir),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(fa-ir),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(fa-ir),
    & .${entryContent} .wp-block-cover h2:lang(fa-ir),
    & .${entryContent} .wp-block-audio figcaption:lang(fa-ir),
    & .${entryContent} .wp-block-video figcaption:lang(fa-ir),
    & .${entryContent} .wp-block-image figcaption:lang(fa-ir),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(fa-ir),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(fa-ir),
    & .${entryContent} .wp-block-file:lang(fa-ir),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(fa-ir),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(haz),
    & .${entryContent} .wp-block-archives li:lang(haz),
    & .${entryContent} .wp-block-categories li:lang(haz),
    & .${entryContent} .wp-block-latest-posts li:lang(haz),
    & .${entryContent} .wp-block-verse:lang(haz),
    & .${entryContent} .has-drop-cap:lang(haz):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(haz),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(haz),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(haz),
    & .${entryContent} .wp-block-cover-image h2:lang(haz),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(haz),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(haz),
    & .${entryContent} .wp-block-cover h2:lang(haz),
    & .${entryContent} .wp-block-audio figcaption:lang(haz),
    & .${entryContent} .wp-block-video figcaption:lang(haz),
    & .${entryContent} .wp-block-image figcaption:lang(haz),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(haz),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(haz),
    & .${entryContent} .wp-block-file:lang(haz),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(haz),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ps),
    & .${entryContent} .wp-block-archives li:lang(ps),
    & .${entryContent} .wp-block-categories li:lang(ps),
    & .${entryContent} .wp-block-latest-posts li:lang(ps),
    & .${entryContent} .wp-block-verse:lang(ps),
    & .${entryContent} .has-drop-cap:lang(ps):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ps),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ps),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ps),
    & .${entryContent} .wp-block-cover-image h2:lang(ps),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ps),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ps),
    & .${entryContent} .wp-block-cover h2:lang(ps),
    & .${entryContent} .wp-block-audio figcaption:lang(ps),
    & .${entryContent} .wp-block-video figcaption:lang(ps),
    & .${entryContent} .wp-block-image figcaption:lang(ps),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ps),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ps),
    & .${entryContent} .wp-block-file:lang(ps),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ps),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(be),
    & .${entryContent} .wp-block-archives li:lang(be),
    & .${entryContent} .wp-block-categories li:lang(be),
    & .${entryContent} .wp-block-latest-posts li:lang(be),
    & .${entryContent} .wp-block-verse:lang(be),
    & .${entryContent} .has-drop-cap:lang(be):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(be),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(be),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(be),
    & .${entryContent} .wp-block-cover-image h2:lang(be),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(be),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(be),
    & .${entryContent} .wp-block-cover h2:lang(be),
    & .${entryContent} .wp-block-audio figcaption:lang(be),
    & .${entryContent} .wp-block-video figcaption:lang(be),
    & .${entryContent} .wp-block-image figcaption:lang(be),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(be),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(be),
    & .${entryContent} .wp-block-file:lang(be),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(be),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(bg-bg),
    & .${entryContent} .wp-block-archives li:lang(bg-bg),
    & .${entryContent} .wp-block-categories li:lang(bg-bg),
    & .${entryContent} .wp-block-latest-posts li:lang(bg-bg),
    & .${entryContent} .wp-block-verse:lang(bg-bg),
    & .${entryContent} .has-drop-cap:lang(bg-bg):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(bg-bg),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(bg-bg),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(bg-bg),
    & .${entryContent} .wp-block-cover-image h2:lang(bg-bg),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(bg-bg),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(bg-bg),
    & .${entryContent} .wp-block-cover h2:lang(bg-bg),
    & .${entryContent} .wp-block-audio figcaption:lang(bg-bg),
    & .${entryContent} .wp-block-video figcaption:lang(bg-bg),
    & .${entryContent} .wp-block-image figcaption:lang(bg-bg),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(bg-bg),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(bg-bg),
    & .${entryContent} .wp-block-file:lang(bg-bg),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(bg-bg),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(kk),
    & .${entryContent} .wp-block-archives li:lang(kk),
    & .${entryContent} .wp-block-categories li:lang(kk),
    & .${entryContent} .wp-block-latest-posts li:lang(kk),
    & .${entryContent} .wp-block-verse:lang(kk),
    & .${entryContent} .has-drop-cap:lang(kk):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(kk),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(kk),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(kk),
    & .${entryContent} .wp-block-cover-image h2:lang(kk),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(kk),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(kk),
    & .${entryContent} .wp-block-cover h2:lang(kk),
    & .${entryContent} .wp-block-audio figcaption:lang(kk),
    & .${entryContent} .wp-block-video figcaption:lang(kk),
    & .${entryContent} .wp-block-image figcaption:lang(kk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(kk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(kk),
    & .${entryContent} .wp-block-file:lang(kk),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(kk),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(mk-mk),
    & .${entryContent} .wp-block-archives li:lang(mk-mk),
    & .${entryContent} .wp-block-categories li:lang(mk-mk),
    & .${entryContent} .wp-block-latest-posts li:lang(mk-mk),
    & .${entryContent} .wp-block-verse:lang(mk-mk),
    & .${entryContent} .has-drop-cap:lang(mk-mk):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(mk-mk),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(mk-mk),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(mk-mk),
    & .${entryContent} .wp-block-cover-image h2:lang(mk-mk),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(mk-mk),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(mk-mk),
    & .${entryContent} .wp-block-cover h2:lang(mk-mk),
    & .${entryContent} .wp-block-audio figcaption:lang(mk-mk),
    & .${entryContent} .wp-block-video figcaption:lang(mk-mk),
    & .${entryContent} .wp-block-image figcaption:lang(mk-mk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(mk-mk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(mk-mk),
    & .${entryContent} .wp-block-file:lang(mk-mk),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(mk-mk),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(mn),
    & .${entryContent} .wp-block-archives li:lang(mn),
    & .${entryContent} .wp-block-categories li:lang(mn),
    & .${entryContent} .wp-block-latest-posts li:lang(mn),
    & .${entryContent} .wp-block-verse:lang(mn),
    & .${entryContent} .has-drop-cap:lang(mn):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(mn),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(mn),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(mn),
    & .${entryContent} .wp-block-cover-image h2:lang(mn),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(mn),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(mn),
    & .${entryContent} .wp-block-cover h2:lang(mn),
    & .${entryContent} .wp-block-audio figcaption:lang(mn),
    & .${entryContent} .wp-block-video figcaption:lang(mn),
    & .${entryContent} .wp-block-image figcaption:lang(mn),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(mn),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(mn),
    & .${entryContent} .wp-block-file:lang(mn),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(mn),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ru-ru),
    & .${entryContent} .wp-block-archives li:lang(ru-ru),
    & .${entryContent} .wp-block-categories li:lang(ru-ru),
    & .${entryContent} .wp-block-latest-posts li:lang(ru-ru),
    & .${entryContent} .wp-block-verse:lang(ru-ru),
    & .${entryContent} .has-drop-cap:lang(ru-ru):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ru-ru),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ru-ru),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ru-ru),
    & .${entryContent} .wp-block-cover-image h2:lang(ru-ru),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ru-ru),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ru-ru),
    & .${entryContent} .wp-block-cover h2:lang(ru-ru),
    & .${entryContent} .wp-block-audio figcaption:lang(ru-ru),
    & .${entryContent} .wp-block-video figcaption:lang(ru-ru),
    & .${entryContent} .wp-block-image figcaption:lang(ru-ru),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ru-ru),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ru-ru),
    & .${entryContent} .wp-block-file:lang(ru-ru),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ru-ru),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(sah),
    & .${entryContent} .wp-block-archives li:lang(sah),
    & .${entryContent} .wp-block-categories li:lang(sah),
    & .${entryContent} .wp-block-latest-posts li:lang(sah),
    & .${entryContent} .wp-block-verse:lang(sah),
    & .${entryContent} .has-drop-cap:lang(sah):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(sah),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(sah),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(sah),
    & .${entryContent} .wp-block-cover-image h2:lang(sah),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(sah),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(sah),
    & .${entryContent} .wp-block-cover h2:lang(sah),
    & .${entryContent} .wp-block-audio figcaption:lang(sah),
    & .${entryContent} .wp-block-video figcaption:lang(sah),
    & .${entryContent} .wp-block-image figcaption:lang(sah),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(sah),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(sah),
    & .${entryContent} .wp-block-file:lang(sah),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(sah),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(sr-rs),
    & .${entryContent} .wp-block-archives li:lang(sr-rs),
    & .${entryContent} .wp-block-categories li:lang(sr-rs),
    & .${entryContent} .wp-block-latest-posts li:lang(sr-rs),
    & .${entryContent} .wp-block-verse:lang(sr-rs),
    & .${entryContent} .has-drop-cap:lang(sr-rs):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(sr-rs),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(sr-rs),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(sr-rs),
    & .${entryContent} .wp-block-cover-image h2:lang(sr-rs),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(sr-rs),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(sr-rs),
    & .${entryContent} .wp-block-cover h2:lang(sr-rs),
    & .${entryContent} .wp-block-audio figcaption:lang(sr-rs),
    & .${entryContent} .wp-block-video figcaption:lang(sr-rs),
    & .${entryContent} .wp-block-image figcaption:lang(sr-rs),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(sr-rs),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(sr-rs),
    & .${entryContent} .wp-block-file:lang(sr-rs),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(sr-rs),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(tt-ru),
    & .${entryContent} .wp-block-archives li:lang(tt-ru),
    & .${entryContent} .wp-block-categories li:lang(tt-ru),
    & .${entryContent} .wp-block-latest-posts li:lang(tt-ru),
    & .${entryContent} .wp-block-verse:lang(tt-ru),
    & .${entryContent} .has-drop-cap:lang(tt-ru):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(tt-ru),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(tt-ru),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(tt-ru),
    & .${entryContent} .wp-block-cover-image h2:lang(tt-ru),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(tt-ru),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(tt-ru),
    & .${entryContent} .wp-block-cover h2:lang(tt-ru),
    & .${entryContent} .wp-block-audio figcaption:lang(tt-ru),
    & .${entryContent} .wp-block-video figcaption:lang(tt-ru),
    & .${entryContent} .wp-block-image figcaption:lang(tt-ru),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(tt-ru),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(tt-ru),
    & .${entryContent} .wp-block-file:lang(tt-ru),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(tt-ru),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(uk),
    & .${entryContent} .wp-block-archives li:lang(uk),
    & .${entryContent} .wp-block-categories li:lang(uk),
    & .${entryContent} .wp-block-latest-posts li:lang(uk),
    & .${entryContent} .wp-block-verse:lang(uk),
    & .${entryContent} .has-drop-cap:lang(uk):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(uk),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(uk),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(uk),
    & .${entryContent} .wp-block-cover-image h2:lang(uk),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(uk),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(uk),
    & .${entryContent} .wp-block-cover h2:lang(uk),
    & .${entryContent} .wp-block-audio figcaption:lang(uk),
    & .${entryContent} .wp-block-video figcaption:lang(uk),
    & .${entryContent} .wp-block-image figcaption:lang(uk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(uk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(uk),
    & .${entryContent} .wp-block-file:lang(uk),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(uk),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(zh-hk),
    & .${entryContent} .wp-block-archives li:lang(zh-hk),
    & .${entryContent} .wp-block-categories li:lang(zh-hk),
    & .${entryContent} .wp-block-latest-posts li:lang(zh-hk),
    & .${entryContent} .wp-block-verse:lang(zh-hk),
    & .${entryContent} .has-drop-cap:lang(zh-hk):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(zh-hk),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(zh-hk),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(zh-hk),
    & .${entryContent} .wp-block-cover-image h2:lang(zh-hk),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(zh-hk),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(zh-hk),
    & .${entryContent} .wp-block-cover h2:lang(zh-hk),
    & .${entryContent} .wp-block-audio figcaption:lang(zh-hk),
    & .${entryContent} .wp-block-video figcaption:lang(zh-hk),
    & .${entryContent} .wp-block-image figcaption:lang(zh-hk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(zh-hk),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(zh-hk),
    & .${entryContent} .wp-block-file:lang(zh-hk),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(zh-hk),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(zh-tw),
    & .${entryContent} .wp-block-archives li:lang(zh-tw),
    & .${entryContent} .wp-block-categories li:lang(zh-tw),
    & .${entryContent} .wp-block-latest-posts li:lang(zh-tw),
    & .${entryContent} .wp-block-verse:lang(zh-tw),
    & .${entryContent} .has-drop-cap:lang(zh-tw):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(zh-tw),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(zh-tw),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(zh-tw),
    & .${entryContent} .wp-block-cover-image h2:lang(zh-tw),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(zh-tw),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(zh-tw),
    & .${entryContent} .wp-block-cover h2:lang(zh-tw),
    & .${entryContent} .wp-block-audio figcaption:lang(zh-tw),
    & .${entryContent} .wp-block-video figcaption:lang(zh-tw),
    & .${entryContent} .wp-block-image figcaption:lang(zh-tw),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(zh-tw),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(zh-tw),
    & .${entryContent} .wp-block-file:lang(zh-tw),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(zh-tw),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(zh-cn),
    & .${entryContent} .wp-block-archives li:lang(zh-cn),
    & .${entryContent} .wp-block-categories li:lang(zh-cn),
    & .${entryContent} .wp-block-latest-posts li:lang(zh-cn),
    & .${entryContent} .wp-block-verse:lang(zh-cn),
    & .${entryContent} .has-drop-cap:lang(zh-cn):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(zh-cn),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(zh-cn),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(zh-cn),
    & .${entryContent} .wp-block-cover-image h2:lang(zh-cn),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(zh-cn),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(zh-cn),
    & .${entryContent} .wp-block-cover h2:lang(zh-cn),
    & .${entryContent} .wp-block-audio figcaption:lang(zh-cn),
    & .${entryContent} .wp-block-video figcaption:lang(zh-cn),
    & .${entryContent} .wp-block-image figcaption:lang(zh-cn),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(zh-cn),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(zh-cn),
    & .${entryContent} .wp-block-file:lang(zh-cn),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(zh-cn),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(bn-bd),
    & .${entryContent} .wp-block-archives li:lang(bn-bd),
    & .${entryContent} .wp-block-categories li:lang(bn-bd),
    & .${entryContent} .wp-block-latest-posts li:lang(bn-bd),
    & .${entryContent} .wp-block-verse:lang(bn-bd),
    & .${entryContent} .has-drop-cap:lang(bn-bd):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(bn-bd),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(bn-bd),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(bn-bd),
    & .${entryContent} .wp-block-cover-image h2:lang(bn-bd),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(bn-bd),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(bn-bd),
    & .${entryContent} .wp-block-cover h2:lang(bn-bd),
    & .${entryContent} .wp-block-audio figcaption:lang(bn-bd),
    & .${entryContent} .wp-block-video figcaption:lang(bn-bd),
    & .${entryContent} .wp-block-image figcaption:lang(bn-bd),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(bn-bd),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(bn-bd),
    & .${entryContent} .wp-block-file:lang(bn-bd),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(bn-bd),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(hi-in),
    & .${entryContent} .wp-block-archives li:lang(hi-in),
    & .${entryContent} .wp-block-categories li:lang(hi-in),
    & .${entryContent} .wp-block-latest-posts li:lang(hi-in),
    & .${entryContent} .wp-block-verse:lang(hi-in),
    & .${entryContent} .has-drop-cap:lang(hi-in):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(hi-in),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(hi-in),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(hi-in),
    & .${entryContent} .wp-block-cover-image h2:lang(hi-in),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(hi-in),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(hi-in),
    & .${entryContent} .wp-block-cover h2:lang(hi-in),
    & .${entryContent} .wp-block-audio figcaption:lang(hi-in),
    & .${entryContent} .wp-block-video figcaption:lang(hi-in),
    & .${entryContent} .wp-block-image figcaption:lang(hi-in),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(hi-in),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(hi-in),
    & .${entryContent} .wp-block-file:lang(hi-in),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(hi-in),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(mr),
    & .${entryContent} .wp-block-archives li:lang(mr),
    & .${entryContent} .wp-block-categories li:lang(mr),
    & .${entryContent} .wp-block-latest-posts li:lang(mr),
    & .${entryContent} .wp-block-verse:lang(mr),
    & .${entryContent} .has-drop-cap:lang(mr):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(mr),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(mr),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(mr),
    & .${entryContent} .wp-block-cover-image h2:lang(mr),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(mr),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(mr),
    & .${entryContent} .wp-block-cover h2:lang(mr),
    & .${entryContent} .wp-block-audio figcaption:lang(mr),
    & .${entryContent} .wp-block-video figcaption:lang(mr),
    & .${entryContent} .wp-block-image figcaption:lang(mr),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(mr),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(mr),
    & .${entryContent} .wp-block-file:lang(mr),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(mr),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ne-np),
    & .${entryContent} .wp-block-archives li:lang(ne-np),
    & .${entryContent} .wp-block-categories li:lang(ne-np),
    & .${entryContent} .wp-block-latest-posts li:lang(ne-np),
    & .${entryContent} .wp-block-verse:lang(ne-np),
    & .${entryContent} .has-drop-cap:lang(ne-np):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ne-np),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ne-np),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ne-np),
    & .${entryContent} .wp-block-cover-image h2:lang(ne-np),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ne-np),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ne-np),
    & .${entryContent} .wp-block-cover h2:lang(ne-np),
    & .${entryContent} .wp-block-audio figcaption:lang(ne-np),
    & .${entryContent} .wp-block-video figcaption:lang(ne-np),
    & .${entryContent} .wp-block-image figcaption:lang(ne-np),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ne-np),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ne-np),
    & .${entryContent} .wp-block-file:lang(ne-np),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ne-np),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(el),
    & .${entryContent} .wp-block-archives li:lang(el),
    & .${entryContent} .wp-block-categories li:lang(el),
    & .${entryContent} .wp-block-latest-posts li:lang(el),
    & .${entryContent} .wp-block-verse:lang(el),
    & .${entryContent} .has-drop-cap:lang(el):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(el),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(el),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(el),
    & .${entryContent} .wp-block-cover-image h2:lang(el),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(el),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(el),
    & .${entryContent} .wp-block-cover h2:lang(el),
    & .${entryContent} .wp-block-audio figcaption:lang(el),
    & .${entryContent} .wp-block-video figcaption:lang(el),
    & .${entryContent} .wp-block-image figcaption:lang(el),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(el),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(el),
    & .${entryContent} .wp-block-file:lang(el),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(el),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(gu),
    & .${entryContent} .wp-block-archives li:lang(gu),
    & .${entryContent} .wp-block-categories li:lang(gu),
    & .${entryContent} .wp-block-latest-posts li:lang(gu),
    & .${entryContent} .wp-block-verse:lang(gu),
    & .${entryContent} .has-drop-cap:lang(gu):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(gu),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(gu),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(gu),
    & .${entryContent} .wp-block-cover-image h2:lang(gu),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(gu),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(gu),
    & .${entryContent} .wp-block-cover h2:lang(gu),
    & .${entryContent} .wp-block-audio figcaption:lang(gu),
    & .${entryContent} .wp-block-video figcaption:lang(gu),
    & .${entryContent} .wp-block-image figcaption:lang(gu),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(gu),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(gu),
    & .${entryContent} .wp-block-file:lang(gu),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(gu),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(he-il),
    & .${entryContent} .wp-block-archives li:lang(he-il),
    & .${entryContent} .wp-block-categories li:lang(he-il),
    & .${entryContent} .wp-block-latest-posts li:lang(he-il),
    & .${entryContent} .wp-block-verse:lang(he-il),
    & .${entryContent} .has-drop-cap:lang(he-il):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(he-il),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(he-il),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(he-il),
    & .${entryContent} .wp-block-cover-image h2:lang(he-il),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(he-il),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(he-il),
    & .${entryContent} .wp-block-cover h2:lang(he-il),
    & .${entryContent} .wp-block-audio figcaption:lang(he-il),
    & .${entryContent} .wp-block-video figcaption:lang(he-il),
    & .${entryContent} .wp-block-image figcaption:lang(he-il),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(he-il),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(he-il),
    & .${entryContent} .wp-block-file:lang(he-il),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(he-il),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ja),
    & .${entryContent} .wp-block-archives li:lang(ja),
    & .${entryContent} .wp-block-categories li:lang(ja),
    & .${entryContent} .wp-block-latest-posts li:lang(ja),
    & .${entryContent} .wp-block-verse:lang(ja),
    & .${entryContent} .has-drop-cap:lang(ja):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ja),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ja),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ja),
    & .${entryContent} .wp-block-cover-image h2:lang(ja),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ja),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ja),
    & .${entryContent} .wp-block-cover h2:lang(ja),
    & .${entryContent} .wp-block-audio figcaption:lang(ja),
    & .${entryContent} .wp-block-video figcaption:lang(ja),
    & .${entryContent} .wp-block-image figcaption:lang(ja),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ja),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ja),
    & .${entryContent} .wp-block-file:lang(ja),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ja),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(ko-kr),
    & .${entryContent} .wp-block-archives li:lang(ko-kr),
    & .${entryContent} .wp-block-categories li:lang(ko-kr),
    & .${entryContent} .wp-block-latest-posts li:lang(ko-kr),
    & .${entryContent} .wp-block-verse:lang(ko-kr),
    & .${entryContent} .has-drop-cap:lang(ko-kr):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(ko-kr),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(ko-kr),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(ko-kr),
    & .${entryContent} .wp-block-cover-image h2:lang(ko-kr),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(ko-kr),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(ko-kr),
    & .${entryContent} .wp-block-cover h2:lang(ko-kr),
    & .${entryContent} .wp-block-audio figcaption:lang(ko-kr),
    & .${entryContent} .wp-block-video figcaption:lang(ko-kr),
    & .${entryContent} .wp-block-image figcaption:lang(ko-kr),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(ko-kr),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(ko-kr),
    & .${entryContent} .wp-block-file:lang(ko-kr),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(ko-kr),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(th),
    & .${entryContent} .wp-block-archives li:lang(th),
    & .${entryContent} .wp-block-categories li:lang(th),
    & .${entryContent} .wp-block-latest-posts li:lang(th),
    & .${entryContent} .wp-block-verse:lang(th),
    & .${entryContent} .has-drop-cap:lang(th):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(th),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(th),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(th),
    & .${entryContent} .wp-block-cover-image h2:lang(th),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(th),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(th),
    & .${entryContent} .wp-block-cover h2:lang(th),
    & .${entryContent} .wp-block-audio figcaption:lang(th),
    & .${entryContent} .wp-block-video figcaption:lang(th),
    & .${entryContent} .wp-block-image figcaption:lang(th),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(th),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(th),
    & .${entryContent} .wp-block-file:lang(th),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(th),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:lang(vi),
    & .${entryContent} .wp-block-archives li:lang(vi),
    & .${entryContent} .wp-block-categories li:lang(vi),
    & .${entryContent} .wp-block-latest-posts li:lang(vi),
    & .${entryContent} .wp-block-verse:lang(vi),
    & .${entryContent} .has-drop-cap:lang(vi):not(:focus):first-letter,
    & .${entryContent} .wp-block-pullquote cite:lang(vi),
    &
        .${entryContent}
        .wp-block-cover-image
        .wp-block-cover-image-text:lang(vi),
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text:lang(vi),
    & .${entryContent} .wp-block-cover-image h2:lang(vi),
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text:lang(vi),
    & .${entryContent} .wp-block-cover .wp-block-cover-text:lang(vi),
    & .${entryContent} .wp-block-cover h2:lang(vi),
    & .${entryContent} .wp-block-audio figcaption:lang(vi),
    & .${entryContent} .wp-block-video figcaption:lang(vi),
    & .${entryContent} .wp-block-image figcaption:lang(vi),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-image
        figcaption:lang(vi),
    &
        .${entryContent}
        .wp-block-gallery
        .blocks-gallery-item
        figcaption:lang(vi),
    & .${entryContent} .wp-block-file:lang(vi),
    & .${entryContent} .wp-block-file .wp-block-file__button:lang(vi),
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    margin-top: calc(6 * 1rem);

    &:first-of-type {
        margin-top: 0;
    }

    & .entry-header {
        margin: calc(3 * 1rem) 1rem 1rem;
        position: relative;
        overflow: hidden;
    }

    & .entry-header:first-of-type {
        overflow: inherit;
    }

    @media only screen and (min-width: 768px) {
        & .entry-header {
            margin: calc(3 * 1rem) calc(10% + 60px) 1rem;
        }
    }

    & .${entryTitle} {
        margin: 0;
    }

    & .${entryTitle}:before {
        background: #767676;
        content: "\\020";
        display: block;
        height: 2px;
        margin: 1rem 0;
        width: 1em;
    }

    & .${entryTitle} a {
        color: inherit;
    }

    & .${entryTitle} a:hover {
        color: #4a4a4a;
    }

    & .${entryMeta}, & .${entryFooter} {
        color: #767676;
        font-weight: 500;
    }

    & .${entryMeta} > span,
    & .${entryFooter} > span {
        margin-right: 1rem;
        display: inline;
    }

    & .${entryMeta} > span:last-child,
    & .${entryFooter} > span:last-child {
        margin-right: 0;
    }

    & .${entryMeta} a,
    & .${entryFooter} a {
        transition: color 110ms ease-in-out;
        color: currentColor;
    }

    & .${entryMeta} a:hover,
    & .${entryFooter} a:hover {
        text-decoration: none;
        color: #0073aa;
    }

    & .${entryMeta} .svg-icon,
    & .${entryFooter} .svg-icon {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.5em;
    }

    & .${entryMeta} {
        margin: 1rem 0;
    }

    & .${entryFooter} {
        margin: calc(2 * 1rem) 1rem 1rem;
    }

    @media only screen and (min-width: 768px) {
        & .${entryFooter} {
            margin: 1rem calc(10% + 60px) calc(3 * 1rem);
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        & .${entryFooter} {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    & .post-thumbnail {
        margin: 1rem;
    }

    @media only screen and (min-width: 768px) {
        & .post-thumbnail {
            margin: 1rem calc(10% + 60px);
        }
    }

    & .post-thumbnail:focus {
        outline: none;
    }

    & .post-thumbnail .post-thumbnail-inner {
        display: block;
    }

    & .post-thumbnail .post-thumbnail-inner img {
        position: relative;
        display: block;
        width: 100%;
    }

    & .${entryContent}, & .entry-summary {
        max-width: calc(100% - (2 * 1rem));
        margin: 0 1rem;
        overflow: hidden;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent}, & .entry-summary {
            max-width: 80%;
            margin: 0 10%;
            padding: 0 60px;
        }
    }

    & .${entryContent} p {
        word-wrap: break-word;
    }

    & .${entryContent} .more-link {
        transition: color 110ms ease-in-out;
        display: inline;
        color: inherit;
    }

    & .${entryContent} .more-link:after {
        content: "\\02192";
        display: inline-block;
        margin-left: 0.5em;
    }

    & .${entryContent} .more-link:hover {
        color: #0073aa;
        text-decoration: none;
    }

    & .${entryContent} a {
        text-decoration: underline;
    }

    & .${entryContent} a.${button}, & .${entryContent} a:hover {
        text-decoration: none;
    }

    & .${entryContent} a.${button} {
        display: inline-block;
    }

    & .${entryContent} a.${button}:hover {
        background: #111;
        color: #fff;
        cursor: pointer;
    }

    & .${entryContent} > iframe[style] {
        margin: 32px 0 !important;
        max-width: 100% !important;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} > iframe[style] {
            max-width: calc(8 * (100vw / 12) - 28px) !important;
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} > iframe[style] {
            max-width: calc(6 * (100vw / 12) - 28px) !important;
        }
    }

    & .${entryContent} .${pageLinks} a {
        margin: calc(0.5 * 1rem);
        text-decoration: none;
    }

    & .${entryContent} .wp-audio-shortcode {
        max-width: calc(100vw - (2 * 1rem));
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-audio-shortcode {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} .wp-audio-shortcode {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    & + .${commentsArea} {
        margin-top: calc(3 * 1rem);
    }

    & .${entryContent} > *,
    & .entry-summary > * {
        margin: 32px 0;
        max-width: 100%;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} > *,
        & .entry-summary > * {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} > *,
        & .entry-summary > * {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} > *,
        & .entry-summary > * {
            margin: 32px 0;
        }
    }

    & .${entryContent} > * > *:first-child,
    & .entry-summary > * > *:first-child {
        margin-top: 0;
    }

    & .${entryContent} > * > *:last-child,
    & .entry-summary > * > *:last-child {
        margin-bottom: 0;
    }

    & .${entryContent} > *.alignwide,
    & .entry-summary > *.alignwide {
        margin-left: auto;
        margin-right: auto;
        clear: both;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} > *.alignwide,
        & .entry-summary > *.alignwide {
            width: 100%;
            max-width: 100%;
        }
    }

    & .${entryContent} > *.alignfull,
    & .entry-summary > *.alignfull {
        position: relative;
        left: -1rem;
        width: calc(100% + (2 * 1rem));
        max-width: calc(100% + (2 * 1rem));
        clear: both;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} > *.alignfull,
        & .entry-summary > *.alignfull {
            margin-top: calc(2 * 1rem);
            margin-bottom: calc(2 * 1rem);
            left: calc(-12.5% - 75px);
            width: calc(125% + 150px);
            max-width: calc(125% + 150px);
        }
    }

    & .${entryContent} > *.${alignleft}, & .entry-summary > *.${alignleft} {
        /*rtl:ignore*/
        float: left;
        max-width: calc(5 * (100vw / 12));
        margin-top: 0;
        margin-left: 0;
        /*rtl:ignore*/
        margin-right: 1rem;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} > *.${alignleft}, & .entry-summary > *.${alignleft} {
            max-width: calc(4 * (100vw / 12));
            /*rtl:ignore*/
            margin-right: calc(2 * 1rem);
        }
    }

    & .${entryContent} > *.${alignright}, & .entry-summary > *.${alignright} {
        /*rtl:ignore*/
        float: right;
        max-width: calc(5 * (100vw / 12));
        margin-top: 0;
        margin-right: 0;
        /*rtl:ignore*/
        margin-left: 1rem;
    }

    @media only screen and (min-width: 768px) {
        &
            .${entryContent}
            > *.${alignright},
            &
            .entry-summary
            > *.${alignright} {
            max-width: calc(4 * (100vw / 12));
            margin-right: 0;
            /*rtl:ignore*/
            margin-left: calc(2 * 1rem);
        }
    }

    & .${entryContent} > *.${aligncenter}, & .entry-summary > *.${aligncenter} {
        margin-left: auto;
        margin-right: auto;
    }

    @media only screen and (min-width: 768px) {
        &
            .${entryContent}
            > *.${aligncenter},
            &
            .entry-summary
            > *.${aligncenter} {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        &
            .${entryContent}
            > *.${aligncenter},
            &
            .entry-summary
            > *.${aligncenter} {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        &
            .${entryContent}
            > *.${aligncenter},
            &
            .entry-summary
            > *.${aligncenter} {
            margin-left: 0;
            margin-right: 0;
        }
    }

    & .${entryContent} .${entryContent}, & .${entryContent} .entry-summary,
    & .${entryContent} &,
    & .entry-summary .${entryContent}, & .entry-summary .entry-summary,
    & .entry-summary & {
        margin: inherit;
        max-width: inherit;
        padding: inherit;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .${entryContent}, & .${entryContent} .entry-summary,
        & .${entryContent} &,
        & .entry-summary .${entryContent}, & .entry-summary .entry-summary,
        & .entry-summary & {
            margin: inherit;
            max-width: inherit;
            padding: inherit;
        }
    }

    & .${entryContent} p.has-background {
        padding: 20px 30px;
    }

    & .${entryContent} .wp-block-audio {
        width: 100%;
    }

    & .${entryContent} .wp-block-audio audio {
        width: 100%;
    }

    & .${entryContent} .wp-block-audio.${alignleft} audio,
    & .${entryContent} .wp-block-audio.${alignright} audio {
        max-width: 198px;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-audio.${alignleft} audio,
        & .${entryContent} .wp-block-audio.${alignright} audio {
            max-width: 384px;
        }
    }

    @media only screen and (min-width: 1379px) {
        & .${entryContent} .wp-block-audio.${alignleft} audio,
        & .${entryContent} .wp-block-audio.${alignright} audio {
            max-width: 385.44px;
        }
    }

    & .${entryContent} .wp-block-video video {
        width: 100%;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link {
        transition: background 150ms ease-in-out;
        border: none;
        font-size: 0.88889em;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        line-height: 1.2;
        box-sizing: border-box;
        font-weight: bold;
        text-decoration: none;
        padding: 0.76rem 1rem;
        outline: none;
        outline: none;
    }

    &
        .${entryContent}
        .wp-block-button
        .wp-block-button__link:not(.has-background) {
        background-color: #0073aa;
    }

    &
        .${entryContent}
        .wp-block-button
        .wp-block-button__link:not(.has-text-color) {
        color: white;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:hover {
        color: white;
        background: #111;
        cursor: pointer;
    }

    & .${entryContent} .wp-block-button .wp-block-button__link:focus {
        color: white;
        background: #111;
        outline: thin dotted;
        outline-offset: -4px;
    }

    &
        .${entryContent}
        .wp-block-button:not(.is-style-squared)
        .wp-block-button__link {
        border-radius: 5px;
    }

    & .${entryContent} .wp-block-button.is-style-outline .wp-block-button__link,
    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:focus,
    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:active {
        transition: all 150ms ease-in-out;
        border-width: 2px;
        border-style: solid;
    }

    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:not(.has-background),
    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:focus:not(.has-background),
    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:active:not(.has-background) {
        background: transparent;
    }

    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:not(.has-text-color),
    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:focus:not(.has-text-color),
    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:active:not(.has-text-color) {
        color: #0073aa;
        border-color: currentColor;
    }

    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:hover {
        color: white;
        border-color: #111;
    }

    &
        .${entryContent}
        .wp-block-button.is-style-outline
        .wp-block-button__link:hover:not(.has-background) {
        color: #111;
    }

    & .${entryContent} .wp-block-archives,
    & .${entryContent} .wp-block-categories,
    & .${entryContent} .wp-block-latest-posts {
        padding: 0;
        list-style: none;
    }

    & .${entryContent} .wp-block-archives li,
    & .${entryContent} .wp-block-categories li,
    & .${entryContent} .wp-block-latest-posts li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: bold;
        line-height: 1.2;
        padding-bottom: 0.75rem;
    }

    & .${entryContent} .wp-block-archives li.menu-item-has-children,
    & .${entryContent} .wp-block-archives li:last-child,
    & .${entryContent} .wp-block-categories li.menu-item-has-children,
    & .${entryContent} .wp-block-categories li:last-child,
    & .${entryContent} .wp-block-latest-posts li.menu-item-has-children,
    & .${entryContent} .wp-block-latest-posts li:last-child {
        padding-bottom: 0;
    }

    & .${entryContent} .wp-block-archives li a,
    & .${entryContent} .wp-block-categories li a,
    & .${entryContent} .wp-block-latest-posts li a {
        text-decoration: none;
    }

    &
        .${entryContent}
        .wp-block-archives.${aligncenter},
        &
        .${entryContent}
        .wp-block-categories.${aligncenter} {
        text-align: center;
    }

    & .${entryContent} .wp-block-categories ul {
        padding-top: 0.75rem;
    }

    & .${entryContent} .wp-block-categories li ul {
        list-style: none;
        padding-left: 0;
    }

    & .${entryContent} .wp-block-categories ul {
        counter-reset: submenu;
    }

    & .${entryContent} .wp-block-categories ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }

    & .${entryContent} .wp-block-latest-posts.is-grid li {
        border-top: 2px solid #ccc;
        padding-top: 1rem;
        margin-bottom: 2rem;
    }

    & .${entryContent} .wp-block-latest-posts.is-grid li a:after {
        content: "";
    }

    & .${entryContent} .wp-block-latest-posts.is-grid li:last-child {
        margin-bottom: auto;
    }

    & .${entryContent} .wp-block-latest-posts.is-grid li:last-child a:after {
        content: "";
    }

    & .${entryContent} .wp-block-preformatted {
        font-size: 0.71111em;
        line-height: 1.8;
        padding: 1rem;
    }

    & .${entryContent} .wp-block-verse {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-size: 22px;
        line-height: 1.8;
    }

    & .${entryContent} .has-drop-cap:not(:focus):first-letter {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: 3.375em;
        line-height: 1;
        font-weight: bold;
        margin: 0 0.25em 0 0;
    }

    & .${entryContent} .wp-block-pullquote {
        border-color: transparent;
        border-width: 2px;
        padding: 1rem;
    }

    & .${entryContent} .wp-block-pullquote blockquote {
        color: #111;
        border: none;
        margin-top: calc(4 * 1rem);
        margin-bottom: calc(4.33 * 1rem);
        margin-right: 0;
        padding-left: 0;
    }

    & .${entryContent} .wp-block-pullquote p {
        font-size: 1.6875em;
        font-style: italic;
        line-height: 1.3;
        margin-bottom: 0.5em;
        margin-top: 0.5em;
    }

    & .${entryContent} .wp-block-pullquote p em {
        font-style: normal;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-pullquote p {
            font-size: 2.25em;
        }
    }

    & .${entryContent} .wp-block-pullquote cite {
        display: inline-block;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        line-height: 1.6;
        text-transform: none;
        color: #767676;
        /*
			 * This requires a rem-based font size calculation instead of our normal em-based one,
			 * because the cite tag sometimes gets wrapped in a p tag. This is equivalent to $font-size_xs.
			 */
        font-size: calc(1rem / (1.25 * 1.125));
    }

    &
        .${entryContent}
        .wp-block-pullquote.${alignleft},
        &
        .${entryContent}
        .wp-block-pullquote.${alignright} {
        width: 100%;
        padding: 0;
    }

    & .${entryContent} .wp-block-pullquote.${alignleft} blockquote,
    & .${entryContent} .wp-block-pullquote.${alignright} blockquote {
        margin: 1rem 0;
        padding: 0;
        text-align: left;
        max-width: 100%;
    }

    &
        .${entryContent}
        .wp-block-pullquote.${alignleft}
        blockquote
        p:first-child,
    &
        .${entryContent}
        .wp-block-pullquote.${alignright}
        blockquote
        p:first-child {
        margin-top: 0;
    }

    & .${entryContent} .wp-block-pullquote.is-style-solid-color {
        background-color: #0073aa;
        padding-left: 0;
        padding-right: 0;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-pullquote.is-style-solid-color {
            padding-left: 10%;
            padding-right: 10%;
        }
    }

    & .${entryContent} .wp-block-pullquote.is-style-solid-color p {
        font-size: 1.6875em;
        line-height: 1.3;
        margin-bottom: 0.5em;
        margin-top: 0.5em;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-pullquote.is-style-solid-color p {
            font-size: 2.25em;
        }
    }

    & .${entryContent} .wp-block-pullquote.is-style-solid-color a {
        color: #fff;
    }

    & .${entryContent} .wp-block-pullquote.is-style-solid-color cite {
        color: inherit;
    }

    & .${entryContent} .wp-block-pullquote.is-style-solid-color blockquote {
        max-width: 100%;
        color: #fff;
        padding-left: 0;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-text-color
        p,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-text-color
        a,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-primary-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-secondary-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-dark-gray-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-light-gray-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-white-color {
        color: inherit;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-pullquote.is-style-solid-color blockquote {
            margin-left: 0;
            margin-right: 0;
        }
    }

    @media only screen and (min-width: 768px) {
        &
            .${entryContent}
            .wp-block-pullquote.is-style-solid-color.${alignright},
            &
            .${entryContent}
            .wp-block-pullquote.is-style-solid-color.${alignleft} {
            padding: 1rem calc(2 * 1rem);
        }
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-pullquote.is-style-solid-color.alignfull {
            padding-left: calc(10% + 58px + (2 * 1rem));
            padding-right: calc(10% + 58px + (2 * 1rem));
        }
    }

    & .${entryContent} .wp-block-quote:not(.is-large),
    & .${entryContent} .wp-block-quote:not(.is-style-large) {
        border-width: 2px;
        border-color: #0073aa;
        padding-top: 0;
        padding-bottom: 0;
    }

    & .${entryContent} .wp-block-quote p {
        font-size: 1em;
        font-style: normal;
        line-height: 1.8;
    }

    & .${entryContent} .wp-block-quote cite {
        /*
			 * This requires a rem-based font size calculation instead of our normal em-based one,
			 * because the cite tag sometimes gets wrapped in a p tag. This is equivalent to $font-size_xs.
			 */
        font-size: calc(1rem / (1.25 * 1.125));
    }

    & .${entryContent} .wp-block-quote.is-large,
    & .${entryContent} .wp-block-quote.is-style-large {
        margin: 1rem 0;
        padding: 0;
        border-left: none;
    }

    & .${entryContent} .wp-block-quote.is-large p,
    & .${entryContent} .wp-block-quote.is-style-large p {
        font-size: 1.6875em;
        line-height: 1.4;
        font-style: italic;
    }

    & .${entryContent} .wp-block-quote.is-large cite,
    & .${entryContent} .wp-block-quote.is-large footer,
    & .${entryContent} .wp-block-quote.is-style-large cite,
    & .${entryContent} .wp-block-quote.is-style-large footer {
        /*
				 * This requires a rem-based font size calculation instead of our normal em-based one,
				 * because the cite tag sometimes gets wrapped in a p tag. This is equivalent to $font-size_xs.
				 */
        font-size: calc(1rem / (1.25 * 1.125));
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-quote.is-large,
        & .${entryContent} .wp-block-quote.is-style-large {
            margin: 1rem 0;
            padding: 1rem 0;
        }

        & .${entryContent} .wp-block-quote.is-large p,
        & .${entryContent} .wp-block-quote.is-style-large p {
            font-size: 1.6875em;
        }
    }

    & .${entryContent} .wp-block-image {
        max-width: 100%;
    }

    & .${entryContent} .wp-block-image img {
        display: block;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-image .${aligncenter} {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} .wp-block-image .${aligncenter} {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-image .${aligncenter} {
            margin: 0;
            width: calc(8 * (100vw / 12) - 28px);
        }

        & .${entryContent} .wp-block-image .${aligncenter} img {
            margin: 0 auto;
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} .wp-block-image .${aligncenter} {
            width: calc(6 * (100vw / 12) - 28px);
        }

        & .${entryContent} .wp-block-image .${aligncenter} img {
            margin: 0 auto;
        }
    }

    & .${entryContent} .wp-block-image.alignfull img {
        width: 100vw;
        max-width: calc(100% + (2 * 1rem));
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-image.alignfull img {
            max-width: calc(125% + 150px);
            margin-left: auto;
            margin-right: auto;
        }
    }

    & .${entryContent} .wp-block-cover-image,
    & .${entryContent} .wp-block-cover {
        position: relative;
        min-height: 430px;
        padding: 1rem;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-cover-image,
        & .${entryContent} .wp-block-cover {
            padding: 1rem 10%;
        }
    }

    & .${entryContent} .wp-block-cover-image .wp-block-cover-image-text,
    & .${entryContent} .wp-block-cover-image .wp-block-cover-text,
    & .${entryContent} .wp-block-cover-image h2,
    & .${entryContent} .wp-block-cover .wp-block-cover-image-text,
    & .${entryContent} .wp-block-cover .wp-block-cover-text,
    & .${entryContent} .wp-block-cover h2 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: 1.6875em;
        font-weight: bold;
        line-height: 1.25;
        padding: 0;
        color: #fff;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-cover-image .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover-image .wp-block-cover-text,
        & .${entryContent} .wp-block-cover-image h2,
        & .${entryContent} .wp-block-cover .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover .wp-block-cover-text,
        & .${entryContent} .wp-block-cover h2 {
            font-size: 2.25em;
            max-width: 100%;
        }
    }

    &
        .${entryContent}
        .wp-block-cover-image.${alignleft},
        &
        .${entryContent}
        .wp-block-cover-image.${alignright},
        &
        .${entryContent}
        .wp-block-cover.${alignleft},
        &
        .${entryContent}
        .wp-block-cover.${alignright} {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        &
            .${entryContent}
            .wp-block-cover-image.${alignleft},
            &
            .${entryContent}
            .wp-block-cover-image.${alignright},
            &
            .${entryContent}
            .wp-block-cover.${alignleft},
            &
            .${entryContent}
            .wp-block-cover.${alignright} {
            padding: 1rem calc(2 * 1rem);
        }
    }

    @media only screen and (min-width: 768px) {
        &
            .${entryContent}
            .wp-block-cover-image.alignfull
            .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover-image.alignfull .wp-block-cover-text,
        & .${entryContent} .wp-block-cover-image.alignfull h2,
        & .${entryContent} .wp-block-cover.alignfull .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover.alignfull .wp-block-cover-text,
        & .${entryContent} .wp-block-cover.alignfull h2 {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        &
            .${entryContent}
            .wp-block-cover-image.alignfull
            .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover-image.alignfull .wp-block-cover-text,
        & .${entryContent} .wp-block-cover-image.alignfull h2,
        & .${entryContent} .wp-block-cover.alignfull .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover.alignfull .wp-block-cover-text,
        & .${entryContent} .wp-block-cover.alignfull h2 {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-cover-image.alignfull,
        & .${entryContent} .wp-block-cover.alignfull {
            padding-left: calc(10% + 58px + (2 * 1rem));
            padding-right: calc(10% + 58px + (2 * 1rem));
        }

        &
            .${entryContent}
            .wp-block-cover-image.alignfull
            .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover-image.alignfull .wp-block-cover-text,
        & .${entryContent} .wp-block-cover-image.alignfull h2,
        & .${entryContent} .wp-block-cover.alignfull .wp-block-cover-image-text,
        & .${entryContent} .wp-block-cover.alignfull .wp-block-cover-text,
        & .${entryContent} .wp-block-cover.alignfull h2 {
            padding: 0;
        }
    }

    & .${entryContent} .wp-block-gallery {
        list-style-type: none;
        padding-left: 0;
    }

    & .${entryContent} .wp-block-gallery .blocks-gallery-image:last-child,
    & .${entryContent} .wp-block-gallery .blocks-gallery-item:last-child {
        margin-bottom: 16px;
    }

    & .${entryContent} .wp-block-gallery figcaption a {
        color: #fff;
    }

    & .${entryContent} .wp-block-audio figcaption,
    & .${entryContent} .wp-block-video figcaption,
    & .${entryContent} .wp-block-image figcaption,
    & .${entryContent} .wp-block-gallery .blocks-gallery-image figcaption,
    & .${entryContent} .wp-block-gallery .blocks-gallery-item figcaption {
        font-size: 0.71111em;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0.5rem;
        text-align: center;
    }

    & .${entryContent} .wp-block-separator,
    & .${entryContent} hr {
        background-color: #767676;
        border: 0;
        height: 2px;
        margin-bottom: 2rem;
        margin-top: 2rem;
        max-width: 2.25em;
        text-align: left;
        /* Remove duplicate rule-line when a separator
		 * is followed by an H1, or H2 */
    }

    & .${entryContent} .wp-block-separator.is-style-wide,
    & .${entryContent} hr.is-style-wide {
        max-width: 100%;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-separator.is-style-wide,
        & .${entryContent} hr.is-style-wide {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} .wp-block-separator.is-style-wide,
        & .${entryContent} hr.is-style-wide {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    & .${entryContent} .wp-block-separator.is-style-dots,
    & .${entryContent} hr.is-style-dots {
        max-width: 100%;
        background-color: inherit;
        border: inherit;
        height: inherit;
        text-align: center;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-separator.is-style-dots,
        & .${entryContent} hr.is-style-dots {
            max-width: calc(8 * (100vw / 12) - 28px);
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} .wp-block-separator.is-style-dots,
        & .${entryContent} hr.is-style-dots {
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    & .${entryContent} .wp-block-separator.is-style-dots:before,
    & .${entryContent} hr.is-style-dots:before {
        color: #767676;
        font-size: 1.6875em;
        letter-spacing: 0.88889em;
        padding-left: 0.88889em;
    }

    & .${entryContent} .wp-block-separator + h1:before,
    & .${entryContent} .wp-block-separator + h2:before,
    & .${entryContent} hr + h1:before,
    & .${entryContent} hr + h2:before {
        display: none;
    }

    & .${entryContent} .wp-block-embed-twitter {
        word-break: break-word;
    }

    & .${entryContent} .wp-block-table th,
    & .${entryContent} .wp-block-table td {
        border-color: #767676;
    }

    & .${entryContent} .wp-block-file {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .${entryContent} .wp-block-file .wp-block-file__button {
        display: table;
        transition: background 150ms ease-in-out;
        border: none;
        border-radius: 5px;
        background: #0073aa;
        font-size: 22px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        line-height: 1.2;
        text-decoration: none;
        font-weight: bold;
        padding: 0.75rem 1rem;
        color: #fff;
        margin-left: 0;
        margin-top: calc(0.75 * 1rem);
    }

    @media only screen and (min-width: 1168px) {
        & .${entryContent} .wp-block-file .wp-block-file__button {
            font-size: 22px;
            padding: 0.875rem 1.5rem;
        }
    }

    & .${entryContent} .wp-block-file .wp-block-file__button:hover {
        background: #111;
        cursor: pointer;
    }

    & .${entryContent} .wp-block-file .wp-block-file__button:focus {
        background: #111;
        outline: thin dotted;
        outline-offset: -4px;
    }

    & .${entryContent} .wp-block-code {
        border-radius: 0;
    }

    & .${entryContent} .wp-block-code code {
        font-size: 1.125em;
        white-space: pre-wrap;
        word-break: break-word;
    }

    & .${entryContent} .wp-block-columns .wp-block-column > *:first-child {
        margin-top: 0;
    }

    & .${entryContent} .wp-block-columns .wp-block-column > *:last-child {
        margin-bottom: 0;
    }

    @media only screen and (min-width: 768px) {
        & .${entryContent} .wp-block-columns {
            flex-wrap: nowrap;
        }

        &
            .${entryContent}
            .wp-block-columns
            .wp-block-column:not(:first-child) {
            margin-left: 32px;
        }
    }

    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-weight: bold;
    }

    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-meta
        .wp-block-latest-comments__comment-date {
        font-weight: normal;
    }

    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment,
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-date,
    &
        .${entryContent}
        .wp-block-latest-comments
        .wp-block-latest-comments__comment-excerpt
        p {
        font-size: inherit;
    }

    &
        .${entryContent}
        .wp-block-latest-comments.has-dates
        .wp-block-latest-comments__comment-date {
        font-size: 0.71111em;
    }

    & .${entryContent} .${hasSmallFontSize} {
        font-size: 0.88889em;
    }

    & .${entryContent} .has-normal-font-size {
        font-size: 1.125em;
    }

    & .${entryContent} .${hasLargeFontSize} {
        font-size: 1.6875em;
    }

    & .${entryContent} .has-huge-font-size {
        font-size: 2.25em;
    }

    & .${entryContent} .has-primary-background-color,
    & .${entryContent} .has-secondary-background-color,
    & .${entryContent} .has-dark-gray-background-color,
    & .${entryContent} .has-light-gray-background-color {
        color: #fff;
    }

    & .${entryContent} .has-primary-background-color > p,
    & .${entryContent} .has-primary-background-color > h1,
    & .${entryContent} .has-primary-background-color > h2,
    & .${entryContent} .has-primary-background-color > h3,
    & .${entryContent} .has-primary-background-color > h4,
    & .${entryContent} .has-primary-background-color > h5,
    & .${entryContent} .has-primary-background-color > h6,
    & .${entryContent} .has-primary-background-color > a,
    & .${entryContent} .has-secondary-background-color > p,
    & .${entryContent} .has-secondary-background-color > h1,
    & .${entryContent} .has-secondary-background-color > h2,
    & .${entryContent} .has-secondary-background-color > h3,
    & .${entryContent} .has-secondary-background-color > h4,
    & .${entryContent} .has-secondary-background-color > h5,
    & .${entryContent} .has-secondary-background-color > h6,
    & .${entryContent} .has-secondary-background-color > a,
    & .${entryContent} .has-dark-gray-background-color > p,
    & .${entryContent} .has-dark-gray-background-color > h1,
    & .${entryContent} .has-dark-gray-background-color > h2,
    & .${entryContent} .has-dark-gray-background-color > h3,
    & .${entryContent} .has-dark-gray-background-color > h4,
    & .${entryContent} .has-dark-gray-background-color > h5,
    & .${entryContent} .has-dark-gray-background-color > h6,
    & .${entryContent} .has-dark-gray-background-color > a,
    & .${entryContent} .has-light-gray-background-color > p,
    & .${entryContent} .has-light-gray-background-color > h1,
    & .${entryContent} .has-light-gray-background-color > h2,
    & .${entryContent} .has-light-gray-background-color > h3,
    & .${entryContent} .has-light-gray-background-color > h4,
    & .${entryContent} .has-light-gray-background-color > h5,
    & .${entryContent} .has-light-gray-background-color > h6,
    & .${entryContent} .has-light-gray-background-color > a {
        color: #fff;
    }

    & .${entryContent} .has-white-background-color {
        color: #111;
    }

    & .${entryContent} .has-white-background-color > p,
    & .${entryContent} .has-white-background-color > h1,
    & .${entryContent} .has-white-background-color > h2,
    & .${entryContent} .has-white-background-color > h3,
    & .${entryContent} .has-white-background-color > h4,
    & .${entryContent} .has-white-background-color > h5,
    & .${entryContent} .has-white-background-color > h6,
    & .${entryContent} .has-white-background-color > a {
        color: #111;
    }

    & .${entryContent} .has-primary-background-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color.has-primary-background-color {
        background-color: #0073aa;
    }

    & .${entryContent} .has-secondary-background-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color.has-secondary-background-color {
        background-color: #005177;
    }

    & .${entryContent} .has-dark-gray-background-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color.has-dark-gray-background-color {
        background-color: #111;
    }

    & .${entryContent} .has-light-gray-background-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color.has-light-gray-background-color {
        background-color: #767676;
    }

    & .${entryContent} .has-white-background-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color.has-white-background-color {
        background-color: #fff;
    }

    & .${entryContent} .has-primary-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-primary-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-primary-color
        > p {
        color: #0073aa;
    }

    & .${entryContent} .has-secondary-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-secondary-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-secondary-color
        > p {
        color: #005177;
    }

    & .${entryContent} .has-dark-gray-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-dark-gray-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-dark-gray-color
        > p {
        color: #111;
    }

    & .${entryContent} .has-light-gray-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-light-gray-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-light-gray-color
        > p {
        color: #767676;
    }

    & .${entryContent} .has-white-color,
    &
        .${entryContent}
        .wp-block-pullquote.is-style-solid-color
        blockquote.has-white-color {
        color: #fff;
    }

    & .${entryContent} .wp-block-image img {
        width: auto;
    }
`;

export const notFound = css`
    & .${pageTitle}:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(fa-IR) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(bg-BG) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(mk-MK) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(ru-RU) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(sr-RS) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(tt-RU) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(zh-HK) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${pageTitle}:lang(zh-TW) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${pageTitle}:lang(zh-CN) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${pageTitle}:lang(bn-BD) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(hi-IN) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(ne-NP) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .${pageTitle}:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(he-IL) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .${pageTitle}:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .${pageTitle}:lang(ko-KR) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .${pageTitle}:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .${pageTitle}:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .${pageTitle} {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .${pageTitle} {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    & .${pageTitle} {
        font-size: 1.6875em;
    }

    @media only screen and (min-width: 768px) {
        & .${pageTitle} {
            font-size: 2.25em;
        }
    }

    & .${pageTitle} {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }
`;

export const pageContent = css`
    & .wp-smiley {
        border: none;
        margin-bottom: 0;
        margin-top: 0;
        padding: 0;
    }
`;

export const error404 = css`
    & .${pageTitle}:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(fa-IR) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${pageTitle}:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(bg-BG) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(mk-MK) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(ru-RU) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(sr-RS) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(tt-RU) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${pageTitle}:lang(zh-HK) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${pageTitle}:lang(zh-TW) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${pageTitle}:lang(zh-CN) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${pageTitle}:lang(bn-BD) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(hi-IN) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(ne-NP) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .${pageTitle}:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .${pageTitle}:lang(he-IL) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .${pageTitle}:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .${pageTitle}:lang(ko-KR) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .${pageTitle}:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .${pageTitle}:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .${pageTitle} {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .${pageTitle} {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    & .${pageTitle} {
        font-size: 1.6875em;
    }

    @media only screen and (min-width: 768px) {
        & .${pageTitle} {
            font-size: 2.25em;
        }
    }

    & .${pageTitle} {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }

    &.${notFound} .${pageTitle}, &.${notFound} .${pageContent} {
        margin: calc(3 * 1rem) 1rem;
    }

    @media only screen and (min-width: 768px) {
        &.${notFound} .${pageTitle}, &.${notFound} .${pageContent} {
            margin: calc(3 * 1rem) calc(10% + 60px) calc(1rem / 2);
        }
    }

    &.${notFound} .search-submit {
        vertical-align: middle;
        margin: 1rem 0;
    }

    &.${notFound} .search-field {
        width: 100%;
    }
`;

export const error404 = css`
    & .page-header {
        margin: 1rem 1rem calc(3 * 1rem);
    }

    @media only screen and (min-width: 768px) {
        & .page-header {
            margin: 0 calc(10% + 60px) calc(10% + 60px);
        }
    }

    & .page-header .${pageTitle} {
        color: #767676;
        display: inline;
        letter-spacing: normal;
    }

    & .page-header .${pageTitle}:before {
        display: none;
    }

    & .page-header .search-term,
    & .page-header .${pageDescription} {
        display: inherit;
        clear: both;
    }

    & .page-header .search-term:after,
    & .page-header .${pageDescription}:after {
        content: ".";
        font-weight: bold;
        color: #767676;
    }
`;

export const featuredImage = css`
    & .${siteTitle} {
        margin: 0;
    }

    @media only screen and (min-width: 768px) {
        & .${siteTitle} {
            display: inline-block;
        }
    }
`;

export const footerNavigation = css`
    display: inline;

    & > div {
        display: inline;
    }

    & .footer-menu {
        display: inline;
        padding-left: 0;
    }

    & .footer-menu li {
        display: inline;
        margin-right: 1rem;
    }
`;

export const gallery = css`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: calc(1.5 * 1rem);
`;

export const galleryCaption = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    display: block;
    font-size: 0.71111em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0.5rem;
`;

export const galleryItem = css`
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
    text-align: center;
    vertical-align: top;
    width: 100%;

    &:last-of-type {
        padding-right: 0;
    }

    & > div > a {
        display: block;
        line-height: 0;
        box-shadow: 0 0 0 0 transparent;
    }

    & > div > a:focus {
        box-shadow: 0 0 0 2px #0073aa;
    }
`;

export const galleryColumns2 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 1) / 2);
    }

    & .${galleryItem}:nth-of-type(2n+2) {
        margin-right: 0;
    }
`;

export const galleryColumns3 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 2) / 3);
    }

    & .${galleryItem}:nth-of-type(3n+3) {
        margin-right: 0;
    }
`;

export const galleryColumns4 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 3) / 4);
    }

    & .${galleryItem}:nth-of-type(4n+4) {
        margin-right: 0;
    }
`;

export const galleryColumns5 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 4) / 5);
    }

    & .${galleryItem}:nth-of-type(5n+5) {
        margin-right: 0;
    }
`;

export const galleryColumns6 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 5) / 6);
    }

    & .${galleryItem}:nth-of-type(6n+6) {
        margin-right: 0;
    }
`;

export const galleryColumns7 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 6) / 7);
    }

    & .${galleryItem}:nth-of-type(7n+7) {
        margin-right: 0;
    }
`;

export const galleryColumns8 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 7) / 8);
    }

    & .${galleryItem}:nth-of-type(8n+8) {
        margin-right: 0;
    }
`;

export const galleryColumns9 = css`
    & .${galleryItem} {
        max-width: calc((100% - 16px * 8) / 9);
    }

    & .${galleryItem}:nth-of-type(9n+9) {
        margin-right: 0;
    }
`;

export const siteHeader = css`
    &:before,
    &:after {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &:after {
        clear: both;
    }

    padding: 1em;

    &.${featuredImage} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 90vh;
    }

    &.${featuredImage} .site-branding-container {
        margin-bottom: auto;
    }

    @media only screen and (min-width: 768px) {
        & {
            margin: 0;
            padding: 3rem 0;
        }

        &.${featuredImage} {
            min-height: 100vh;
            margin-bottom: 3rem;
        }
    }

    &.${featuredImage} {
        /* Hide overflow for overflowing featured image */
        overflow: hidden;
        /* Need relative positioning to properly align layers. */
        position: relative;
        /* Add text shadow to text, to increase readability. */
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        /* Set white text color when featured image is set. */
        /* add focus state to social media icons */
        /* Entry header */
        /* Custom Logo Link */
        /* Make sure important elements are above pseudo elements used for effects. */
        /* Set up image filter layer positioning */
        /* Background & Effects */
        /* Shared background settings between pseudo elements. */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /* The intensity of each blend mode is controlled via layer opacity. */
        /* Second layer: screen. */
        /* Third layer: multiply. */
        /* When image filters are inactive, a black overlay is added. */
        /* Fourth layer: overlay. */
        /* Fifth layer: readability overlay */
    }

    &.${featuredImage}
        .${siteBranding}
        .${siteTitle},
        &.${featuredImage}
        .${siteBranding}
        .${siteDescription},
        &.${featuredImage}
        .${mainNavigation}
        a:after,
    &.${featuredImage}
        .${mainNavigation}
        .main-menu
        > li.menu-item-has-children:after,
    &.${featuredImage} .${mainNavigation} li,
    &.${featuredImage} .${socialNavigation} li,
    &.${featuredImage} .${entryMeta}, &.${featuredImage} .${entryTitle} {
        color: #fff;
    }

    &.${featuredImage} .${mainNavigation} a,
    &.${featuredImage} .${mainNavigation} a + svg,
    &.${featuredImage} .${socialNavigation} a,
    &.${featuredImage} .${siteTitle} a,
    &.${featuredImage} .site-featured-image a {
        color: #fff;
        transition: opacity 110ms ease-in-out;
    }

    &.${featuredImage} .${mainNavigation} a:hover,
    &.${featuredImage} .${mainNavigation} a:active,
    &.${featuredImage} .${mainNavigation} a:hover + svg,
    &.${featuredImage} .${mainNavigation} a:active + svg,
    &.${featuredImage} .${mainNavigation} a + svg:hover,
    &.${featuredImage} .${mainNavigation} a + svg:active,
    &.${featuredImage} .${mainNavigation} a + svg:hover + svg,
    &.${featuredImage} .${mainNavigation} a + svg:active + svg,
    &.${featuredImage} .${socialNavigation} a:hover,
    &.${featuredImage} .${socialNavigation} a:active,
    &.${featuredImage} .${socialNavigation} a:hover + svg,
    &.${featuredImage} .${socialNavigation} a:active + svg,
    &.${featuredImage} .${siteTitle} a:hover,
    &.${featuredImage} .${siteTitle} a:active,
    &.${featuredImage} .${siteTitle} a:hover + svg,
    &.${featuredImage} .${siteTitle} a:active + svg,
    &.${featuredImage} .site-featured-image a:hover,
    &.${featuredImage} .site-featured-image a:active,
    &.${featuredImage} .site-featured-image a:hover + svg,
    &.${featuredImage} .site-featured-image a:active + svg {
        color: #fff;
        opacity: 0.6;
    }

    &.${featuredImage} .${mainNavigation} a:focus,
    &.${featuredImage} .${mainNavigation} a:focus + svg,
    &.${featuredImage} .${mainNavigation} a + svg:focus,
    &.${featuredImage} .${mainNavigation} a + svg:focus + svg,
    &.${featuredImage} .${socialNavigation} a:focus,
    &.${featuredImage} .${socialNavigation} a:focus + svg,
    &.${featuredImage} .${siteTitle} a:focus,
    &.${featuredImage} .${siteTitle} a:focus + svg,
    &.${featuredImage} .site-featured-image a:focus,
    &.${featuredImage} .site-featured-image a:focus + svg {
        color: #fff;
    }

    &.${featuredImage} .${mainNavigation} .sub-menu a {
        opacity: inherit;
    }

    &.${featuredImage} .${socialNavigation} a:focus {
        color: #fff;
        opacity: 1;
        border-bottom: 1px solid #fff;
    }

    &.${featuredImage} .${socialNavigation} svg,
    &.${featuredImage} .site-featured-image svg {
        /* Use -webkit- only if supporting: Chrome < 54, iOS < 9.3, Android < 4.4.4 */
        -webkit-filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
    }

    &.${featuredImage} .site-featured-image {
        /* First layer: grayscale. */
    }

    &.${featuredImage} .site-featured-image .post-thumbnail img {
        height: auto;
        left: 50%;
        max-width: 1000%;
        min-height: 100%;
        min-width: 100vw;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: auto;
        z-index: 1;
        /* When image filters are active, make it grayscale to colorize it blue. */
    }

    @supports (object-fit: cover) {
        &.${featuredImage} .site-featured-image .post-thumbnail img {
            height: 100%;
            left: 0;
            object-fit: cover;
            top: 0;
            transform: none;
            width: 100%;
        }
    }

    &.${featuredImage} .site-featured-image .entry-header {
        margin-top: calc(4 * 1rem);
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
        /* Entry meta */
    }

    @media only screen and (min-width: 768px) {
        &.${featuredImage} .site-featured-image .entry-header {
            margin-left: calc(10% + 60px);
            margin-right: calc(10% + 60px);
        }
    }

    &.${featuredImage}
        .site-featured-image
        .entry-header
        .${entryTitle}:before {
        background: #fff;
    }

    &.${featuredImage} .site-featured-image .entry-header .${entryMeta} {
        font-weight: 500;
    }

    &.${featuredImage} .site-featured-image .entry-header .${entryMeta} > span {
        margin-right: 1rem;
        display: inline-block;
    }

    &.${featuredImage}
        .site-featured-image
        .entry-header
        .${entryMeta}
        > span:last-child {
        margin-right: 0;
    }

    &.${featuredImage} .site-featured-image .entry-header .${entryMeta} a {
        transition: color 110ms ease-in-out;
        color: currentColor;
    }

    &.${featuredImage}
        .site-featured-image
        .entry-header
        .${entryMeta}
        a:hover {
        text-decoration: none;
    }

    &.${featuredImage}
        .site-featured-image
        .entry-header
        .${entryMeta}
        .svg-icon {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.5em;
    }

    &.${featuredImage}
        .site-featured-image
        .entry-header
        .${entryMeta}
        .${discussionAvatarList} {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        &.${featuredImage}
            .site-featured-image
            .entry-header.has-discussion
            .${entryMeta} {
            display: flex;
            position: relative;
        }

        &.${featuredImage}
            .site-featured-image
            .entry-header.has-discussion
            .${entryTitle} {
            padding-right: calc(1 * (100vw / 12) + 1rem);
        }

        &.${featuredImage}
            .site-featured-image
            .entry-header.has-discussion
            .${entryMeta}
            .comment-count {
            position: absolute;
            right: 0;
        }

        &.${featuredImage}
            .site-featured-image
            .entry-header.has-discussion
            .${entryMeta}
            .${discussionAvatarList} {
            display: block;
            position: absolute;
            bottom: 100%;
        }
    }

    &.${featuredImage} .${customLogoLink} {
        background: #fff;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }

    &.${featuredImage}
        .${customLogoLink}:hover,
        &.${featuredImage}
        .${customLogoLink}:active,
        &.${featuredImage}
        .${customLogoLink}:focus {
        box-shadow: 0 0 0 2px white;
    }

    &.${featuredImage} .${siteBranding} {
        position: relative;
        z-index: 10;
    }

    &.${featuredImage} .site-featured-image .entry-header {
        position: relative;
        z-index: 9;
    }

    &.${featuredImage} .site-branding-container:after,
    &.${featuredImage} .site-featured-image:before,
    &.${featuredImage} .site-featured-image:after,
    &.${featuredImage}:after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        content: "\\020";
        width: 100%;
        height: 100%;
    }

    &.${featuredImage} .site-featured-image:after {
        background: #000;
        mix-blend-mode: multiply;
        opacity: 0.7;
        /* When image filters are active, a blue overlay is added. */
    }

    &.${featuredImage}:after {
        background: #000;
        /**
		 * Add a transition to the readability overlay, to add a subtle
		 * but smooth effect when resizing the screen.
		 */
        transition: opacity 1200ms ease-in-out;
        opacity: 0.7;
        z-index: 5;
        /* When image filters are active, a blue overlay is added. */
    }

    &.${featuredImage} ::-moz-selection {
        background: rgba(255, 255, 255, 0.17);
    }

    &.${featuredImage} ::selection {
        background: rgba(255, 255, 255, 0.17);
    }
`;

export const hasFeaturedImage = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 90vh;
    overflow: hidden;
    position: relative;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    & .${siteHeader}, & .entry-header,
    & .${entryFooter} {
        position: relative;
        z-index: 9;
    }

    &:after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        content: "\\020";
        width: 100%;
        height: 100%;
        background: #000e14;
        transition: opacity 1200ms ease-in-out;
        z-index: 5;
        opacity: 0.38;
    }

    & .site-featured-image:before {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        content: "\\020";
        width: 100%;
        height: 100%;
        background: #0073aa;
        mix-blend-mode: screen;
        opacity: 0.1;
    }

    & .site-featured-image:before,
    & .site-featured-image:after {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "\\020";
        pointer-events: none;
        background: #0073aa;
        mix-blend-mode: screen;
        opacity: 0.1;
        z-index: 2;
    }

    & .site-featured-image:after {
        mix-blend-mode: multiply;
        opacity: 1;
        z-index: 3;
    }

    & h1,
    & p,
    & a {
        color: #fff;
    }

    & h1:before {
        background: #fff;
    }

    & .entry-header {
        margin: calc(3 * 1rem) 1rem 1rem;
        position: relative;
    }

    & .${entryMeta} .svg-icon {
        color: #fff;
        vertical-align: middle;
    }

    & .${entryMeta} a {
        color: #fff;
    }

    & .${entryMeta} a:hover,
    & .${entryMeta} a:focus {
        color: #fff;
        opacity: 0.6;
    }

    @media only screen and (min-width: 768px) {
        & {
            min-height: 100vh;
            margin-bottom: 3rem;
            padding-bottom: 3rem;
        }

        &:after {
            opacity: 0.18;
        }

        & .entry-header {
            margin: calc(3 * 1rem) calc(10% + 60px) 0;
        }

        & .entry-header .${entryTitle} {
            padding-right: calc(1 * (100vw / 12) + 1rem);
        }

        /* Pagination */
    }
`;

export const hasLargerFontSize = css`
    font-size: 1.6875em;

    @media only screen and (min-width: 768px) {
        & {
            font-size: 2.25em;
        }
    }
`;

export const hasRegularFontSize = css`
    font-size: 1.6875em;
`;

export const hfeed = css`
    @media only screen and (min-width: 768px) {
        & .${entry} .entry-header {
            margin: calc(3 * 1rem) calc(10% + 60px) calc(1rem / 2);
        }
    }
`;

export const imageFiltersEnabled = css`& .${siteHeader}.${featuredImage} .site-featured-image .post-thumbnail img {
  filter: grayscale(100%);
}

& .${siteHeader}.${featuredImage} .site-featured-image:before {
  background: #0073aa;
  mix-blend-mode: screen;
  opacity: 0.1;
}

& .${siteHeader}.${featuredImage} .site-featured-image:after {
  background: #0073aa;
  opacity: .8;
  z-index: 3;
  /* Browsers supporting mix-blend-mode don't need opacity < 1 */
}

@supports (mix-blend-mode: multiply) {
  & .${siteHeader}.${featuredImage} .site-featured-image:after {
    opacity: 1;
  }


}

& .${siteHeader}.${featuredImage} .site-branding-container:after {
  background: rgba(0, 0, 0, 0.35);
  mix-blend-mode: overlay;
  opacity: 0.5;
  z-index: 4;
  /* Browsers supporting mix-blend-mode can have a light overlay */
}

@supports (mix-blend-mode: overlay) {
  & .${siteHeader}.${featuredImage} .site-branding-container:after {
    background: rgba(255, 255, 255, 0.35);
  }


}

& .${siteHeader}.${featuredImage}:after {
  background: #000e14;
  opacity: 0.38;
}

@media only screen and (min-width: 768px) {
  & .${siteHeader}.${featuredImage}:after {
    opacity: 0.18;
  }


}

& .${entry} .post-thumbnail {
  position: relative;
  display: block;
}

& .${entry} .post-thumbnail .post-thumbnail-inner {
  filter: grayscale(100%);
}

& .${entry} .post-thumbnail .post-thumbnail-inner:after {
  background: rgba(0, 0, 0, 0.35);
  content: "";
  display: block;
  height: 100%;
  opacity: .5;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
}

@supports (mix-blend-mode: multiply) {
  & .${entry} .post-thumbnail .post-thumbnail-inner:after {
    display: none;
  }


}

& .${entry} .post-thumbnail:before, & .${entry} .post-thumbnail:after {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "\\020";
  pointer-events: none;
}

& .${entry} .post-thumbnail:before {
  background: #0073aa;
  mix-blend-mode: screen;
  opacity: 0.1;
  z-index: 2;
}

& .${entry} .post-thumbnail:after {
  background: #0073aa;
  mix-blend-mode: multiply;
  opacity: .8;
  z-index: 3;
  /* Browsers supporting mix-blend-mode don't need opacity < 1 */
}

@supports (mix-blend-mode: multiply) {
  & .${entry} .post-thumbnail:after {
    opacity: 1;
  }


}

`;

export const noComments = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.125em;
`;

export const noResults = css`
    &.${notFound} .${pageTitle}, &.${notFound} .${pageContent} {
        margin: calc(3 * 1rem) 1rem;
    }

    @media only screen and (min-width: 768px) {
        &.${notFound} .${pageTitle}, &.${notFound} .${pageContent} {
            margin: calc(3 * 1rem) calc(10% + 60px) calc(1rem / 2);
        }
    }

    &.${notFound} .search-submit {
        vertical-align: middle;
        margin: 1rem 0;
    }

    &.${notFound} .search-field {
        width: 100%;
    }
`;

export const page = css`
    body& .${mainNavigation} {
        display: block;
    }
`;

export const pagination = css`
    & .${navLinks}:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(fa-IR) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .${navLinks}:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(bg-BG) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(mk-MK) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(ru-RU) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(sr-RS) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(tt-RU) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .${navLinks}:lang(zh-HK) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${navLinks}:lang(zh-TW) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${navLinks}:lang(zh-CN) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .${navLinks}:lang(bn-BD) {
        font-family: Arial, sans-serif;
    }

    & .${navLinks}:lang(hi-IN) {
        font-family: Arial, sans-serif;
    }

    & .${navLinks}:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .${navLinks}:lang(ne-NP) {
        font-family: Arial, sans-serif;
    }

    & .${navLinks}:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .${navLinks}:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .${navLinks}:lang(he-IL) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .${navLinks}:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .${navLinks}:lang(ko-KR) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .${navLinks}:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .${navLinks}:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .${navLinks} {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .${navLinks} {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    & .${navLinks} {
        font-size: 0.88889em;
    }

    & .${navLinks} {
        display: flex;
        flex-wrap: wrap;
        padding: 0 calc(0.5 * 1rem);
    }

    & .${navLinks} > * {
        padding: calc(0.5 * 1rem);
    }

    & .${navLinks} > *.dots,
    & .${navLinks} > *.prev {
        padding-left: 0;
    }

    & .${navLinks} > *.dots,
    & .${navLinks} > *.next {
        padding-right: 0;
    }

    & .${navLinks} a:focus {
        text-decoration: underline;
        outline-offset: -1px;
    }

    & .${navLinks} a:focus.prev,
    & .${navLinks} a:focus.next {
        text-decoration: none;
    }

    & .${navLinks} a:focus.prev .nav-prev-text,
    & .${navLinks} a:focus.prev .nav-next-text,
    & .${navLinks} a:focus.next .nav-prev-text,
    & .${navLinks} a:focus.next .nav-next-text {
        text-decoration: underline;
    }

    & .${navLinks} .nav-next-text,
    & .${navLinks} .nav-prev-text {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        & .${navLinks} {
            margin-left: calc(10% + 60px);
            padding: 0;
        }

        & .${navLinks} .prev > *,
        & .${navLinks} .next > * {
            display: inline-block;
            vertical-align: text-bottom;
        }

        & .${navLinks} > * {
            padding: 1rem;
        }
    }
`;

export const postNavigation = css`
    & .post-title:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .post-title:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .post-title:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .post-title:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .post-title:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .post-title:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .post-title:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .post-title:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .post-title:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .post-title:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .post-title:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .post-title:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .post-title:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .post-title:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .post-title:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .post-title:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .post-title {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

    & .post-title {
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    & .post-title {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }

    margin: calc(3 * 1rem) 0;

    @media only screen and (min-width: 768px) {
        & {
            margin: calc(3 * 1rem) calc(10% + 60px);
            max-width: calc(6 * (100vw / 12));
        }
    }

    @media only screen and (min-width: 1168px) {
        & {
            margin: calc(3 * 1rem) 0;
            max-width: 100%;
        }
    }

    & .${navLinks} {
        margin: 0 1rem;
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 768px) {
        & .${navLinks} {
            margin: 0;
        }
    }

    @media only screen and (min-width: 1168px) {
        & .${navLinks} {
            flex-direction: row;
            margin: 0 calc(10% + 60px);
            max-width: calc(6 * (100vw / 12) - 28px);
        }
    }

    & .${navLinks} a .meta-nav {
        color: #767676;
        user-select: none;
    }

    & .${navLinks} a .meta-nav:before,
    & .${navLinks} a .meta-nav:after {
        display: none;
        content: "—";
        width: 2em;
        color: #767676;
        height: 1em;
    }

    & .${navLinks} a .post-title {
        hyphens: auto;
    }

    & .${navLinks} a:hover {
        color: #005177;
    }

    @media only screen and (min-width: 1168px) {
        & .${navLinks} .nav-previous,
        & .${navLinks} .nav-next {
            min-width: calc(50% - 2 * 1rem);
        }
    }

    & .${navLinks} .nav-previous {
        order: 2;
    }

    @media only screen and (min-width: 1168px) {
        & .${navLinks} .nav-previous {
            order: 1;
        }
    }

    & .${navLinks} .nav-previous + .nav-next {
        margin-bottom: 1rem;
    }

    & .${navLinks} .nav-previous .meta-nav:before {
        display: inline;
    }

    & .${navLinks} .nav-next {
        order: 1;
    }

    @media only screen and (min-width: 1168px) {
        & .${navLinks} .nav-next {
            order: 2;
            padding-left: 1rem;
        }
    }

    & .${navLinks} .nav-next .meta-nav:after {
        display: inline;
    }
`;

export const screenReaderText = css`
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
    /* Many screen reader and browser combinations announce broken words as they would appear visually. */

    &:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        clip-path: none;
        color: #21759b;
        display: block;
        font-size: 14px;
        font-size: 0.875rem;
        font-weight: bold;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000;
        /* Above WP toolbar. */
    }
`;

export const search = css`
    & .page-header {
        margin: 1rem 1rem calc(3 * 1rem);
    }

    @media only screen and (min-width: 768px) {
        & .page-header {
            margin: 0 calc(10% + 60px) calc(10% + 60px);
        }
    }

    & .page-header .${pageTitle} {
        color: #767676;
        display: inline;
        letter-spacing: normal;
    }

    & .page-header .${pageTitle}:before {
        display: none;
    }

    & .page-header .search-term,
    & .page-header .${pageDescription} {
        display: inherit;
        clear: both;
    }

    & .page-header .search-term:after,
    & .page-header .${pageDescription}:after {
        content: ".";
        font-weight: bold;
        color: #767676;
    }
`;

export const siteBranding = css`
    line-height: 1.25;

    color: #767676;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    position: relative;
    word-wrap: break-word;

    @media only screen and (min-width: 768px) {
        & {
            margin: 0 calc(10% + 60px);
        }
    }
`;

export const siteContent = css`
    &:before,
    &:after {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &:after {
        clear: both;
    }

    overflow: hidden;
`;

export const socialNavigation = css`
    line-height: 1.25;

    margin-top: calc(1rem / 2);
    text-align: left;

    & ul.social-links-menu {
        content: "";
        display: table;
        table-layout: fixed;
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    & ul.social-links-menu li {
        display: inline-block;
        vertical-align: bottom;
        vertical-align: -webkit-baseline-middle;
        list-style: none;
    }

    & ul.social-links-menu li:nth-child(n + 2) {
        margin-left: 0.1em;
    }

    & ul.social-links-menu li a {
        border-bottom: 1px solid transparent;
        display: block;
        color: #111;
        margin-bottom: -1px;
        transition: opacity 110ms ease-in-out;
    }

    & ul.social-links-menu li a:hover,
    & ul.social-links-menu li a:active {
        color: #111;
        opacity: 0.6;
    }

    & ul.social-links-menu li a:focus {
        color: #111;
        opacity: 1;
        border-bottom: 1px solid #111;
    }

    & ul.social-links-menu li a svg {
        display: block;
        width: 32px;
        height: 32px;
        transform: translateZ(0);
    }

    & ul.social-links-menu li a svg#ui-icon-link {
        transform: rotate(-45deg);
    }
`;

export const siteDescription = css`
    font-size: 1.125em;

    letter-spacing: -0.01em;

    @media only screen and (min-width: 768px) {
        & + .${socialNavigation} {
            margin-top: calc(1rem / 5);
        }
    }

    display: inline;
    color: #767676;
    font-weight: normal;
    margin: 0;
`;

export const siteFooter = css`
    &:before,
    &:after {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &:after {
        clear: both;
    }
`;

export const siteInfo = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;

    #colophon & {
        margin: calc(2 * 1rem) 1rem;
    }

    @media only screen and (min-width: 768px) {
        #colophon & {
            margin: calc(3 * 1rem) calc(10% + 60px);
        }
    }

    #colophon & {
        color: #767676;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-wrap: break-word;
    }

    #colophon & a {
        color: inherit;
    }

    #colophon & a:hover {
        text-decoration: none;
        color: #0073aa;
    }

    #colophon & .imprint,
    #colophon & .privacy-policy-link {
        margin-right: 1rem;
    }
`;

export const siteLogo = css`
    position: relative;
    z-index: 999;
    margin-bottom: calc(0.66 * 1rem);

    @media only screen and (min-width: 768px) {
        & {
            margin-bottom: 0;
            position: absolute;
            right: calc(100% + (1.25 * 1rem));
            top: 4px;
            z-index: 999;
        }
    }

    & .${customLogoLink} {
        border-radius: 100%;
        box-sizing: content-box;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        display: block;
        width: 50px;
        height: 50px;
        overflow: hidden;
        transition: box-shadow 200ms ease-in-out;
    }

    & .${customLogoLink} .custom-logo {
        min-height: inherit;
    }

    &
        .${customLogoLink}:hover,
        &
        .${customLogoLink}:active,
        &
        .${customLogoLink}:focus {
        box-shadow: 0 0 0 2px black;
    }

    @media only screen and (min-width: 768px) {
        & .${customLogoLink} {
            width: 64px;
            height: 64px;
        }
    }
`;

export const sticky = css`
    display: block;
`;

export const stickyPost = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

    font-size: 0.71111em;

    background: #0073aa;
    color: #fff;
    display: inline-block;
    font-weight: bold;
    line-height: 1;
    padding: 0.25rem;
    position: absolute;
    text-transform: uppercase;
    top: -1rem;
    z-index: 1;
`;

export const tnPagination = css`
    margin: 0 1rem;

    & .page-numbers {
        padding: calc(0.5 * 1rem);
        display: inline-block;
    }

    & .page-numbers.dots {
        padding: calc(0.5 * 1rem) 0;
    }

    & .pagination-links {
        display: inline-block;
    }

    & .pagination-links .nav-next-text,
    & .pagination-links .nav-prev-text {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        /* Pagination */
        & .pagination-links .nav-next-text,
        & .pagination-links .nav-prev-text {
            display: inline-block;
        }

        & .pagination-links {
            padding: 1rem;
        }

        & .pagination-links.prev {
            padding-left: 0;
        }

        & .pagination-links.next {
            padding-right: 0;
        }

        & {
            margin: 0 calc(10% + 60px);
        }

        & .page-numbers {
            padding: 1rem;
        }

        & .page-numbers.dots {
            padding: 1rem 0;
        }
    }
`;

export const updated = css`
    &:not(.published) {
        display: none;
    }
`;

export const widget = css`
    margin: 0 0 1rem;
    /* Make sure select elements fit in widgets. */

    & select {
        max-width: 100%;
    }

    & a {
        color: #0073aa;
    }

    & a:hover {
        color: #005177;
    }
`;

export const widgetArchive = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetCalendar = css`
    & .calendar_wrap {
        text-align: center;
    }

    & .calendar_wrap table td,
    & .calendar_wrap table th {
        border: none;
    }

    & .calendar_wrap a {
        text-decoration: underline;
    }
`;

export const widgetCategories = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetMeta = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetNavMenu = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetPages = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetRecentComments = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetRecentEntries = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetRss = css`
    & ul li:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & ul li:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & ul li:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & ul li:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & ul li:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & ul li:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & ul li:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & ul li:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & ul li:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & ul li:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & ul {
        padding: 0;
        list-style: none;
    }

    & ul li {
        color: #767676;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-size: calc(22px * 1.125);
        font-weight: 700;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    & ul ul {
        counter-reset: submenu;
    }

    & ul ul > li > a::before {
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
            "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: normal;
        content: "– " counters(submenu, "– ", none);
        counter-increment: submenu;
    }
`;

export const widgetSearch = css`
    & .search-field {
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        & .search-field {
            width: auto;
        }
    }

    & .search-submit {
        display: block;
        margin-top: 1rem;
    }
`;

export const widgetTagCloud = css`
    & .tagcloud:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    & .tagcloud:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    & .tagcloud:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .tagcloud:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .tagcloud:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    & .tagcloud:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    & .tagcloud:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    & .tagcloud:lang(mr) {
        font-family: Arial, sans-serif;
    }

    & .tagcloud:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    & .tagcloud:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    & .tagcloud:lang(gu) {
        font-family: Arial, sans-serif;
    }

    & .tagcloud:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    & .tagcloud:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    & .tagcloud:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    & .tagcloud:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    & .tagcloud:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    & .tagcloud {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        font-weight: 700;
    }
`;

export const widgetArea = css`
    #colophon & {
        margin: calc(2 * 1rem) 1rem;
    }

    @media only screen and (min-width: 768px) {
        #colophon & {
            margin: calc(3 * 1rem) calc(10% + 60px);
        }
    }
`;

export const widgetColumn = css`
    #colophon & {
        display: flex;
        flex-wrap: wrap;
    }

    #colophon & .${widget} {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        width: 100%;
        word-wrap: break-word;
    }

    @media only screen and (min-width: 1168px) {
        #colophon & .${widget} {
            margin-right: calc(3 * 1rem);
            width: calc(50% - (3 * 1rem));
        }
    }
`;

export const wpCaption = css`
    margin-bottom: calc(1.5 * 1rem);

    @media only screen and (min-width: 768px) {
        &.${aligncenter} {
            position: relative;
            left: calc(calc(8 * (100vw / 12) - 28px) / 2);
            transform: translateX(-50%);
        }
    }

    @media only screen and (min-width: 1168px) {
        &.${aligncenter} {
            left: calc(calc(6 * (100vw / 12) - 28px) / 2);
        }
    }

    & img[class*="wp-image-"] {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const wpCaptionText = css`
    &:lang(ar) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ary) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(azb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ckb) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(fa-ir) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(haz) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(ps) {
        font-family: Tahoma, Arial, sans-serif;
    }

    &:lang(be) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(bg-bg) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(kk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mk-mk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(mn) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(ru-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sah) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(sr-rs) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(tt-ru) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(uk) {
        font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    }

    &:lang(zh-hk) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang HK",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-tw) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang TC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(zh-cn) {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
            "Helvetica Neue", "Microsoft YaHei New", STHeiti Light, sans-serif;
    }

    &:lang(bn-bd) {
        font-family: Arial, sans-serif;
    }

    &:lang(hi-in) {
        font-family: Arial, sans-serif;
    }

    &:lang(mr) {
        font-family: Arial, sans-serif;
    }

    &:lang(ne-np) {
        font-family: Arial, sans-serif;
    }

    &:lang(el) {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    &:lang(gu) {
        font-family: Arial, sans-serif;
    }

    &:lang(he-il) {
        font-family: "Arial Hebrew", Arial, sans-serif;
    }

    &:lang(ja) {
        font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", Meiryo,
            "Helvetica Neue", sans-serif;
    }

    &:lang(ko-kr) {
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic",
            Dotum, sans-serif;
    }

    &:lang(th) {
        font-family: "Sukhumvit Set", "Helvetica Neue", helvetica, arial,
            sans-serif;
    }

    &:lang(vi) {
        font-family: "Libre Franklin", sans-serif;
    }

    color: #767676;
    font-size: 0.71111em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
`;

export const wpCustomizerUnloading = css`
    &
        .${mainNavigation}
        .main-menu
        > li.menu-item-has-children
        .submenu-expand {
        display: none;
    }
`;


import {
  html
} from 'https://unpkg.com/htm/preact/standalone.module.js';

export const Footer = ({
  content
}) => {
  const cYear = new Date().getFullYear()
  return html `
            <footer>${cYear} | ${content}</footer>
            `
}
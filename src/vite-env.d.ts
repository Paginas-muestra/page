/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      ar?: boolean | string;
      'camera-controls'?: boolean | string;
      'camera-orbit'?: string;
      poster?: string;
      'auto-rotate'?: boolean | string;
      'shadow-intensity'?: string | number;
    };
  }
}
// types/rough-notation.d.ts
declare module 'rough-notation' {
  export type AnnotationType = 
    | 'underline'
    | 'box'
    | 'circle'
    | 'highlight'
    | 'strike-through'
    | 'crossed-off'
    | 'bracket';

  export interface RoughAnnotationConfig {
    type: AnnotationType;
    color?: string;
    strokeWidth?: number;
    animationDuration?: number;
    iterations?: number;
    padding?: number;
    multiline?: boolean;
  }

  export interface RoughAnnotation {
    show(): void;
    hide(): void;
    remove(): void;
  }

  export function annotate(element: HTMLElement, config: RoughAnnotationConfig): RoughAnnotation;
}
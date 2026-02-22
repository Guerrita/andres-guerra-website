import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type ImgProps = ComponentPropsWithoutRef<"img">;
type TableProps = ComponentPropsWithoutRef<"table">;
type ThProps = ComponentPropsWithoutRef<"th">;
type TdProps = ComponentPropsWithoutRef<"td">;

export const mdxComponents = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-3xl font-heading font-bold text-foreground mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-2xl font-heading font-bold text-foreground mt-8 mb-3 flex items-center gap-2"
      {...props}
    >
      <span className="w-1 h-6 bg-primary rounded-full" />
      {props.children}
    </h2>
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-xl font-heading font-semibold text-foreground mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-foreground/80 leading-relaxed mb-4" {...props} />
  ),
  a: (props: AnchorProps) => (
    <a
      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc list-inside space-y-1 text-foreground/80 mb-4 ml-2"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal list-inside space-y-1 text-foreground/80 mb-4 ml-2"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li className="text-foreground/80 leading-relaxed" {...props} />
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-primary/40 pl-4 py-2 my-4 bg-primary/5 rounded-r-xl text-foreground/70 italic"
      {...props}
    />
  ),
  code: (props: CodeProps) => (
    <code
      className="font-code text-sm bg-secondary/80 text-primary px-1.5 py-0.5 rounded-md"
      {...props}
    />
  ),
  pre: (props: PreProps) => (
    <pre
      className="font-code text-sm bg-card/80 border border-primary/10 rounded-xl p-4 mb-4 overflow-x-auto"
      {...props}
    />
  ),
  img: (props: ImgProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-xl border border-primary/10 my-6 w-full"
      alt={props.alt || ""}
      {...props}
    />
  ),
  hr: () => <hr className="border-border/50 my-8" />,
  table: (props: TableProps) => (
    <div className="overflow-x-auto mb-4">
      <table
        className="w-full text-sm border border-border/50 rounded-xl overflow-hidden"
        {...props}
      />
    </div>
  ),
  th: (props: ThProps) => (
    <th
      className="bg-secondary/50 text-foreground font-heading font-semibold text-left px-4 py-2 border-b border-border/50"
      {...props}
    />
  ),
  td: (props: TdProps) => (
    <td
      className="px-4 py-2 text-foreground/80 border-b border-border/30"
      {...props}
    />
  ),
};

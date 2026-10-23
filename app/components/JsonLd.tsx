type JsonLdProps = { data: Record<string, unknown> };

// O "<" é escapado para o conteúdo nunca conseguir fechar a tag <script>
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

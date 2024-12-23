interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
      <code className="text-gray-100 text-sm">{code}</code>
    </pre>
  );
}

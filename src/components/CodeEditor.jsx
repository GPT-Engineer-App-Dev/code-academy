import React from 'react';
import { Box } from '@chakra-ui/react';
import { MonacoEditor } from '@monaco-editor/react';

const CodeEditor = ({ language, value, onChange }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <MonacoEditor
        height="400px"
        language={language}
        value={value}
        onChange={onChange}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: 'line',
          automaticLayout: true,
        }}
      />
    </Box>
  );
};

export default CodeEditor;
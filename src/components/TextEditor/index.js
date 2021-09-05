import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./TextEditor.css";

const TextEditor = (props) => {
  let content;
  if (!props.value) content = EditorState.createEmpty();
  else {
    if (props.isText) {
      content = EditorState.createWithContent(
        ContentState.createFromText(props.value)
      );
    } else {
      let contentBlock = htmlToDraft(props.value);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      content = EditorState.createWithContent(contentState);
    }
  }

  const [editorState, setEditorState] = useState(() => content);

  const updateState = value => {
    setEditorState(value)
    props.updated(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  useEffect(() => {
    // console.log(EditorState);
  }, [editorState]);


  return (
    <div className="editor-con">
     
        <Editor
        editorState={editorState}
        onEditorStateChange={updateState} 
        placeholder="Write Something..."
      />
      
    </div>
  );
};

export default TextEditor;

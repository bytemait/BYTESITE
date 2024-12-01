import React from 'react'
import ReactQuill from 'react-quill';

const Editor = ({value, onChange}) => {
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            ['image'],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['blockquote', 'code-block'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'list', 'bold', 'italic', 'underline', 'link', 'image', 'align', 'color', 'background', 'blockquote', 'code-block'
    ];

    return (
        <ReactQuill
            value={value}
            className="w-full rounded-lg mt-4"
            modules={modules}
            formats={formats}
            placeholder="Write the content of your post here..."
            onChange={onChange}
        />
    )
}

export default Editor
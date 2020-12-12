import React from "react";

export default function ImageCard({ image }) {
  const tags = image?.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image?.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {image?.user}
        </div>
        <ul>
          <li>
            <strong>{image.views}: </strong>400
          </li>
          <li>
            <strong>{image.downloads}: </strong>12
          </li>
          <li>
            <strong>{image.likes}: </strong>50
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, idx) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            key={idx}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

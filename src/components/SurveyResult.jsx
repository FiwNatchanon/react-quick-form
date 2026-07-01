import React from "react";
import { CircleCheck, RefreshCw } from 'lucide-react';

export default function SurveyResult({ data, onReset }) {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-[#e7fcf0] border border-[#a6f1ca] text-[#1c693c] p-4 rounded-md flex flex-col gap-3">
        <div className="flex gap-3 items-center mb-1">
            <CircleCheck className="h-6 w-6 text-[#2cb869]" />
            <span className="text-lg font-medium">ส่งแบบสำรวจสำเร็จ!</span>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-gray-500 font-medium">ชื่อ:</span>
          <span className="font-normal text-black">{data.fullName}</span>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-gray-500 font-medium">อีเมล:</span>
          <span className="font-normal text-black">{data.email}</span>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-gray-500 font-medium">หนังที่เลือก:</span>
          <span className="text-purple-700 font-normal">{data.favoriteMovie}</span>
        </div>

        {data.comments && (
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-gray-500 font-medium">ความคิดเห็น:</span>
            <span className="font-medium">{data.comments}</span>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full mt-6 bg-[#1f1f1f] hover:bg-[#333] text-white flex items-center justify-center gap-2 py-4 rounded-md transition-colors font-medium text-base"
      >
        <RefreshCw className="h-5 w-5"/>
        เริ่มทำแบบสำรวจใหม่
      </button>
    </div>
  );
}
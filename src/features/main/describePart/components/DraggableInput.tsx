import React, {useEffect, useState} from "react";
import uploadedIcon from '@assets/svgs/uploadedFile.svg';
import imgPreviewIcon from '@assets/svgs/imgPreview.svg';

type Prop = {
    onSelectImage: (val: File | undefined) => void
}

const MAX_SIZE = 5 * 1024 * 1024;

export default function DraggableInput({onSelectImage}:Prop) {
    const [fileUploaded, setFileUploaded] = useState<File | undefined>();

    const onDropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();

        let file: File | null = null;

        if (ev.dataTransfer.items) {
            file = [...ev.dataTransfer.items]
                .find(item => item.kind === "file")
                ?.getAsFile() || null;
        } else {
            file = ev.dataTransfer.files[0] || null;
        }

        if (!file) return;

        if (file.size > MAX_SIZE) {
            alert("حجم فایل نباید بیشتر از 5 مگابایت باشد");
            return;
        }

        setFileUploaded(file);
    };

    const onDragOver = (ev: React.DragEvent<HTMLDivElement>) => ev.preventDefault();

    const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const file = ev.target.files?.[0];
        if (!file) return;

        if (file.size > MAX_SIZE) {
            alert("حجم فایل نباید بیشتر از 5 مگابایت باشد");
            return;
        }

        setFileUploaded(file);
    };

    useEffect(() => {
        onSelectImage(fileUploaded);
    }, [fileUploaded, onSelectImage]);

    return (
        <div
            className='w-full h-[15rem] border-2 mt-5 rounded border-gray-200 border-dashed flex flex-col items-center p-5'
            onDrop={onDropHandler}
            onDragOver={onDragOver}
        >
            {/* Hidden input */}
            <input
                id="file_picker"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, application/pdf"
                onChange={onFileChange}
            />

            {/* Label to trigger input */}
            <label
                htmlFor="file_picker"
                className="w-full h-full cursor-pointer flex flex-col items-center text-xs"
            >
                <div className='w-full flex flex-row-reverse items-center gap-2'>
                    <img src={uploadedIcon} alt=""/>
                    <div>png, jpeg, jpg, pdf</div>
                </div>
                <img src={fileUploaded ? URL.createObjectURL(fileUploaded) : imgPreviewIcon} alt=""
                     className='w-15 aspect-square mt-5'/>
                <div className='font-bold mt-2 text-sm'>لطفا فیش پرداختی را ارسال کنید</div>
                <div className='font-semibold text-gray-400 mt-2 text-sm'>
                    حداکثر سایز آپلود: 5 مگابایت
                </div>
            </label>

            {fileUploaded && (
                <div className="mt-3 w-full flex text-xs justify-between">
                    <div className="font-semibold text-sm mb-1">فایل‌ انتخاب شده:</div>
                    <div key={fileUploaded.name} className="text-green-600 text-sm">
                        {fileUploaded.name} ({(fileUploaded.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                </div>
            )}
        </div>
    );
}

import * as React from 'react';
export interface ResUploaderProps {
    className?: string;
    multiple?: boolean;
    maxSize?: number;
    onFilesChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare class ResUploader extends React.Component<ResUploaderProps> {
    private fileInput;
    buildFormData(): FormData;
    getFile0(): File;
    upload: (formData?: FormData) => Promise<string>;
    render(): JSX.Element;
}
interface ImageUploaderProps {
    id?: string;
    label?: string;
    size?: 'sm' | 'lg';
    onSaved?: (imageId: string) => Promise<void>;
}
export declare class ImageUploader extends React.Component<ImageUploaderProps> {
    private imgBaseSize;
    private file;
    private suffix;
    private resUploader;
    private isChanged;
    private resId;
    private overSize;
    private enableUploadButton;
    private srcImage;
    private desImage;
    private fileError;
    constructor(props: ImageUploaderProps);
    private onFileChange;
    private compress;
    private convertBase64UrlToBlob;
    private upload;
    private onSaved;
    render(): JSX.Element;
}
export {};

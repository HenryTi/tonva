import * as React from 'react';
export interface ResUploaderProps {
    className?: string;
    label?: string;
    multiple?: boolean;
    maxSize?: number;
    onFilesChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare class ResUploader extends React.Component<ResUploaderProps> {
    private fileInput;
    private fileName;
    buildFormData(): FormData;
    getFile0(): File;
    upload: (formData?: FormData) => Promise<string | {
        error: any;
    }>;
    private onFilesChange;
    render(): JSX.Element;
}
interface ImageUploaderProps {
    id?: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'raw';
    onSaved?: (imageId: string) => Promise<void>;
    imageTypes?: string[];
}
export declare class ImageUploader extends React.Component<ImageUploaderProps> {
    private static imageTypes;
    private imgBaseSize;
    private imageTypes;
    private suffix;
    private resUploader;
    private file;
    private desImgWidth;
    private desImgHeight;
    private desImgSize;
    private srcImgWidth;
    private srcImgHeight;
    private isChanged;
    private resId;
    private enableUploadButton;
    private srcImage;
    private desImage;
    private fileError;
    private uploaded;
    constructor(props: ImageUploaderProps);
    private onFileChange;
    private setSize;
    private compress;
    private convertBase64UrlToBlob;
    private upload;
    private onSaved;
    private showOrgImage;
    private levelDiv;
    render(): JSX.Element;
}
interface AudioUploaderProps {
    id?: string;
    label?: string;
    onSaved?: (imageId: string) => Promise<void>;
}
export declare class AudioUploader extends React.Component<AudioUploaderProps> {
    private static audioTypes;
    private suffix;
    private resUploader;
    private content;
    private file;
    private fileSize;
    private isChanged;
    private resId;
    private enableUploadButton;
    private fileError;
    private uploaded;
    private uploading;
    constructor(props: AudioUploaderProps);
    private onFileChange;
    private convertBase64UrlToBlob;
    private upload;
    private onSaved;
    render(): JSX.Element;
}
export {};

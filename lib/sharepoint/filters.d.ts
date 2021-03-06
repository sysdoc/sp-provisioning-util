import { Field } from '../provisioning/field';
import { ContentType } from '../provisioning/contenttype';
export declare function getJsTypeForField(fieldType: string): "string" | "number" | "boolean" | "CommonType" | "CommonType[]" | "Date";
export declare function isTaxonomyField(field: Field): boolean;
export declare function getFieldId(field: any): string;
export declare function generateGuid(): string;
export declare function booleanToUpper(b: boolean): "TRUE" | "FALSE";
export declare function generateTaxonomyFieldId(id: any): string;
export declare function getFieldType(type: string): any;
export declare function validateContentType(contentType: ContentType): boolean;
export declare function validateField(field: Field): boolean;

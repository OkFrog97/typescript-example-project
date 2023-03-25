import { FromDTO } from './FormDTO'
import { IFormOutput } from './Interfaces'

export class FormAdapter {
    private form: HTMLFormElement | null;
    
    constructor(formName: string){
        this.form = document.forms.namedItem(formName);
    }

    public getFormsObject(): IFormOutput {
        const outputObject = new FromDTO();
        if (this.form && this.form.elements) {
            for(let i = 0; i < this.form?.elements.length; i++) {
                const field = this.form.elements[i] as HTMLInputElement;
                this.addValueToFormObject(outputObject, field);
            }
        }
        return outputObject;
    }

    private addValueToFormObject(formObject: IFormOutput, field: HTMLInputElement): void {
        if (field.name === 'nick') {
            formObject.nick = field.value;
        }
        if (field.name === 'name') {
            formObject.name = field.value;
        } 
        if (field.name === 'date') {
            formObject.date = new Date(Date.parse(field.value));
        }
        if (field.name === 'caseHistory') {
            formObject.caseHistory = field.value
        }
    }

    public addValidatorsToForm() {}
}
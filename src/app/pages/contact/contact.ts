import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  };

  isSubmitting = false;
  isSubmitted = false;

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.isSubmitted = true;
      
      // Reset form after successful submission
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }, 2000);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false
    };
    this.isSubmitted = false;
  }
}

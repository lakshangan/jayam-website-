
import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, ContactFormValues } from './schema';

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Google Sheets submission URL - Replace with your actual Google Sheets Web App URL
  const [googleSheetUrl, setGoogleSheetUrl] = useState<string>("");

  // Form setup with React Hook Form and Zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
    },
  });

  // Handle form submission to Google Sheets
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log('Form data submitted:', data);
    
    try {
      // Check if Google Sheet URL is configured
      if (!googleSheetUrl) {
        // If no URL is set, show configuration message
        toast({
          title: "Google Sheets Not Configured",
          description: "Please set up your Google Sheets Web App URL in the admin settings.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Send the data to Google Sheets
      const response = await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', // This is important for CORS issues with Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Since we're using no-cors, we won't get a proper response
      // So we'll just assume it succeeded if no error is thrown
      toast({
        title: "Message sent successfully!",
        description: "Your message has been recorded. We'll get back to you soon.",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // For demonstration or admin purposes, a way to set the Google Sheets URL
  const handleSetGoogleSheetUrl = () => {
    const url = prompt("Enter your Google Sheets Web App URL:", googleSheetUrl);
    if (url) {
      setGoogleSheetUrl(url);
      localStorage.setItem('jayam_googlesheet_url', url);
      toast({
        title: "URL Updated",
        description: "Google Sheets connection URL has been updated.",
      });
    }
  };

  // Load Google Sheets URL from localStorage on component mount
  useEffect(() => {
    const savedUrl = localStorage.getItem('jayam_googlesheet_url');
    if (savedUrl) {
      setGoogleSheetUrl(savedUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === formRef.current) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div 
      ref={formRef}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-700 border border-white/20 hover:shadow-xl hover:border-white/30 transition-all"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-jayam-blue">Send us a Message</h3>
        {/* Admin button - typically would be hidden or protected in production */}
        <button 
          onClick={handleSetGoogleSheetUrl}
          className="text-xs text-gray-400 hover:text-jayam-blue"
          title="Admin: Configure Google Sheets"
        >
          Configure
        </button>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Your Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field} 
                    className="border-gray-300 focus:border-jayam-blue focus:ring-jayam-blue/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    {...field} 
                    className="border-gray-300 focus:border-jayam-blue focus:ring-jayam-blue/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    {...field} 
                    className="border-gray-300 focus:border-jayam-blue focus:ring-jayam-blue/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="program"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Program of Interest</FormLabel>
                <FormControl>
                  <select 
                    {...field} 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jayam-blue/50 transition-all appearance-none bg-white"
                  >
                    <option value="" disabled>Select a Program</option>
                    <option value="engineering">Engineering</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="management">Management</option>
                    <option value="arts">Arts</option>
                    <option value="science">Science</option>
                    <option value="tailoring">Tailoring</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Your Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Type your message here" 
                    {...field} 
                    rows={4} 
                    className="border-gray-300 focus:border-jayam-blue focus:ring-jayam-blue/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 h-12 group overflow-hidden relative"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative">Send Message</span>
              </>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;


import { useEffect, useState } from 'react';
import { Loader2, Sparkles, Send } from 'lucide-react';
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
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [googleSheetUrl, setGoogleSheetUrl] = useState<string>("");

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

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      if (!googleSheetUrl) {
        toast({
          title: "Configuration Required",
          description: "Please set up your Google Sheets endpoint in admin settings.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      toast({
        title: "Inquiry Received",
        description: "Your message has been sent to our admissions team.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSetGoogleSheetUrl = () => {
    const url = prompt("Enter Google Sheets Web App URL:", googleSheetUrl);
    if (url) {
      setGoogleSheetUrl(url);
      localStorage.setItem('jayam_googlesheet_url', url);
    }
  };

  useEffect(() => {
    setGoogleSheetUrl(localStorage.getItem('jayam_googlesheet_url') || "");
  }, []);

  return (
    <div className="bg-secondary p-10 relative group">
      <div className="flex justify-between items-center mb-10">
        <div className="space-y-1">
          <h3 className="text-2xl font-display font-semibold text-foreground">Admission Application</h3>
          <p className="text-xs text-accent uppercase tracking-widest font-bold">Session 2024-25 • Limited Availability</p>
        </div>
        <button
          onClick={handleSetGoogleSheetUrl}
          className="p-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground/30 hover:text-accent transition-colors"
        >
          <Sparkles size={14} />
        </button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 font-black">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="premium-input"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 font-black">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      className="premium-input"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 font-black">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+91 000 000 0000"
                      {...field}
                      className="premium-input"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="program"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 font-black">Interest Area</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="premium-input appearance-none bg-secondary cursor-pointer"
                    >
                      <option value="" disabled>Select your goal</option>
                      <option value="fashion-design">Fashion Designing Diploma</option>
                      <option value="master-designer">Master Designer Course</option>
                      <option value="tailoring">Professional Tailoring</option>
                      <option value="beautician">Advanced Beautician</option>
                    </select>
                  </FormControl>
                  <FormMessage className="text-[10px] text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 font-black">Aspirations / Questions</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what you want to achieve..."
                    {...field}
                    rows={4}
                    className="premium-input min-h-[120px] resize-none"
                  />
                </FormControl>
                <FormMessage className="text-[10px] text-red-400" />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-2xl bg-foreground text-background font-black uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  PROCESSING APPLICATION
                </>
              ) : (
                <>
                  SUBMIT APPLICATION
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </span>
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;


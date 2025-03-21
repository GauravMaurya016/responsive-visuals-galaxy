
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'portfoliio';
const EMAIL_TEMPLATE_ID = 'template_rhydmys';
const EMAIL_PUBLIC_KEY = 'oxhpg6KupkAtMgAUi';
// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  // Setup form handling with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
  });
  
const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        EMAIL_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSuccess(true);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <div className={cn(
              "opacity-0 transform translate-y-10 transition-all duration-700 ease-out",
              isVisible && "opacity-100 translate-y-0"
            )}>
              <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-4">
                Get In Touch
              </div>
            </div>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-100",
              isVisible && "opacity-100 translate-y-0"
            )}>
              Let's work <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">together</span>
            </h2>
            
            <p className={cn(
              "text-lg text-gray-600 mb-12 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-200",
              isVisible && "opacity-100 translate-y-0"
            )}>
              Have a project in mind? Let's discuss how I can help bring your ideas to life. Feel free to reach out through the contact form or directly via email or phone.
            </p>
            
            <div className="space-y-6">
              <div className={cn(
                "flex items-start space-x-4 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-300",
                isVisible && "opacity-100 translate-y-0"
              )}>
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-600">gauravpro0016@gmail.com</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start space-x-4 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-400",
                isVisible && "opacity-100 translate-y-0"
              )}>
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-600">Lucknow, India</p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start space-x-4 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-500",
                isVisible && "opacity-100 translate-y-0"
              )}>
                {/* <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div> */}
                {/* <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-600">+91 9721585291</p>
                </div> */}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={cn(
            "bg-white rounded-xl shadow-sm p-8 opacity-0 transform translate-y-10 transition-all duration-700 ease-out delay-400",
            isVisible && "opacity-100 translate-y-0"
          )}>
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            {...field} 
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
                        <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            {...field} 
                          />
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
                        <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center px-6 py-3 text-white rounded-lg transition-all duration-300",
                      isSubmitting 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-black hover:bg-gray-800 hover:shadow-lg"
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
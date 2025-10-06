import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { submitChatMessage } from "@/services/formService";
import { toast } from "sonner";
import { trackConversion, trackMetaEvent } from "@/utils/gtm";

interface ChatFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ChatDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const form = useForm<ChatFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  /*
  useEffect(() => {
    const timer = setTimeout(() => setShowDialog(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  */
  // Handler for WhatsApp button
  const handleWhatsapp = () => {
    window.open("https://wa.me/919940415750?text=Hi%2C%20I%20am%20interested%20in%20your%20tour%20package", "_blank");
  };

  // Handler for submit: store in Firestore
  const handleSubmit = async (values: ChatFormValues) => {
    try {
      await submitChatMessage(values);
      // GTM event for chat form submission
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'chat_form_submit',
          name: values.name,
          email: values.email,
          page_path: window.location.pathname,
        });
      }
      
      // Track Google Ads conversion
      trackConversion();

      // Meta Pixel event
      trackMetaEvent('Lead', {form: 'chat_dialog'});

      toast.success("Message sent successfully!");
      form.reset();
      onClose();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending chat message:", error);
    }
  };

  if (!showDialog) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex justify-between mb-2">
            <DialogTitle className="text-2xl font-playfair">
              Have a chat with our team
            </DialogTitle>
          </div>
          <div className="space-y-2 mt-4">
            <p className="text-lg">India: +91-9940415750</p>
            <p className="text-lg mt-6">
              Or fill in the form below and we'll be in touch
            </p>
          </div>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4 flex-1 overflow-y-auto py-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Where would you like to go?"
                      className="min-h-[150px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={isSubscribed}
                onChange={(e) => setIsSubscribed(e.target.checked)}
                className="mt-1"
              />
              <label className="text-sm text-gray-600">
                Sign up to receive travel inspiration, exclusive offers & our
                latest news
              </label>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-[#71203F] text-white rounded-lg font-semibold hover:bg-[#a33064] transition-all shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

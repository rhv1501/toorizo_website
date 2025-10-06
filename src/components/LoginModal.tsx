import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, User, Phone, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // GTM event for login form submission
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'login_form_submit',
          name,
          email,
          page_path: window.location.pathname,
        });
      }
      
      // Show success toast
      toast({
        title: "Login successful",
        description: "Welcome to Toorizo!",
      });
      
      // Close the modal
      onClose();
      
      // Reset form
      setEmail("");
      setName("");
      setPhone("");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">Sign in to Toorizo</DialogTitle>
          <DialogDescription className="text-center">
            Enter your details below to continue your journey with us
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Mail size={18} />
              </div>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <User size={18} />
              </div>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Phone size={18} />
              </div>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10"
                placeholder="+91 99999 99999"
                required
              />
            </div>
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-toorizo-gold hover:bg-toorizo-accent text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue"}
            </Button>
          </div>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                or continue with
              </span>
            </div>
          </div>
          
          <button 
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => {
              toast({
                title: "Google login",
                description: "Google login functionality will be implemented soon",
              });
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285f4"/>
            </svg>
            Sign in with Google
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;

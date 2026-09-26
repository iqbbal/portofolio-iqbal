'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DeveloperProfile } from '@/core/domain/entities/profile.entity';
import { Button } from '@/presentation/design-system/atoms/Button';
import { CopyButton } from '@/presentation/design-system/atoms/CopyButton';
import { ThemeToggle } from '@/presentation/design-system/atoms/ThemeToggle';
import { LinkedInIcon, WhatsAppIcon } from '@/presentation/design-system/atoms/BrandIcons';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingNavbarProps {
  profile: DeveloperProfile;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ profile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#featured', dotColor: 'bg-amber-400' },
    { label: 'Enterprise', href: '#archive', dotColor: 'bg-sky-500' },
    { label: 'Skills & Arch', href: '#architecture', dotColor: 'bg-purple-500' },
    { label: 'Experience', href: '#experience', dotColor: 'bg-emerald-500' },
  ];

  const whatsappUrl =
    profile.socialLinks.find((s) => s.platform === 'WhatsApp')?.url ||
    'https://wa.me/6285155488455';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3.5',
        scrolled
          ? 'bg-[#FAF9F6]/85 dark:bg-[#0B0F17]/85 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.06] py-3 shadow-xs'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Photo & Name */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-300/80 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/[0.05] dark:ring-white/[0.1]">
              <Image
                src={profile.avatarUrl || '/assets/images/profile/iqbal-profile.JPEG'}
                alt={profile.fullName}
                fill
                priority
                loading="eager"
                sizes="32px"
                className="object-cover object-center"
              />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              iqbal.dev
            </span>
          </a>
        </div>

        {/* Center: Desktop Floating Pill Capsule with Colored Indicator Dots */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors"
            >
              <span className={cn('w-1.5 h-1.5 rounded-full', link.dotColor)} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Quick Action CTAs (ThemeToggle + WhatsApp + LinkedIn + Get in Touch) */}
        <div className="hidden sm:flex items-center gap-2">
          <ThemeToggle />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-current" />}
            >
              WhatsApp
            </Button>
          </a>

          <a
            href={profile.socialLinks.find((s) => s.platform === 'LinkedIn')?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<LinkedInIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 fill-current" />}
            >
              LinkedIn
            </Button>
          </a>

          <a href="#contact">
            <Button variant="primary" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
              Get in Touch
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button & Mobile Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 p-4 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className={cn('w-2 h-2 rounded-full', link.dotColor)} />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <CopyButton textToCopy={profile.email} label="Copy Email" className="w-full justify-center" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-center"
                leftIcon={<WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 fill-current" />}
              >
                WhatsApp Chat
              </Button>
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="sm" className="w-full">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

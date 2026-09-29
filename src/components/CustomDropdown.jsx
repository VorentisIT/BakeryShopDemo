import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function CustomDropdown({
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  icon: Icon = null,
  className = '',
  buttonClassName = '',
  menuClassName = '',
  align = 'left'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Normalize options array (supports strings or objects { value, label })
  const formattedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = formattedOptions.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  const handleSelect = (val) => {
    playSound('click');
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative select-none ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => {
          playSound('click');
          setIsOpen(!isOpen);
        }}
        className={`w-full bg-[#FFF8EE]/80 hover:bg-[#FFF8EE] focus:bg-white border rounded-xl px-3.5 py-3 text-xs text-[#2B1A14] flex items-center justify-between gap-2 transition-all cursor-pointer ${
          isOpen 
            ? 'border-[#5A2E1F] ring-2 ring-[#5A2E1F]/15 bg-white' 
            : 'border-[#E9D8C5] hover:border-[#5A2E1F]/60'
        } ${buttonClassName}`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          {Icon && <Icon className="w-4 h-4 text-[#78665C] shrink-0" />}
          <span className={`truncate ${selectedOption ? 'text-[#2B1A14] font-medium' : 'text-[#78665C]/70'}`}>
            {displayLabel}
          </span>
        </div>

        <ChevronDown 
          className={`w-4 h-4 text-[#78665C] shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#5A2E1F]' : ''
          }`} 
        />
      </button>

      {/* Luxury Animated Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute z-50 mt-1.5 w-full min-w-[200px] bg-white rounded-2xl border border-[#E9D8C5] shadow-[0_12px_32px_rgba(43,26,20,0.12)] p-1.5 max-h-64 overflow-y-auto scrollbar-none backdrop-blur-md ${
              align === 'right' ? 'right-0' : 'left-0'
            } ${menuClassName}`}
          >
            {formattedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#5A2E1F] text-[#FFF8EE] font-semibold shadow-xs'
                      : 'text-[#2B1A14] hover:bg-[#F4E5D2] hover:text-[#5A2E1F]'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#C9823A] stroke-[2.5] shrink-0" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

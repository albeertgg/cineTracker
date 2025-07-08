import { useNavigate } from 'react-router';
import { useUserContext } from '../hooks/useUserContext';
import Button from './Button';
import { TbLogout } from 'react-icons/tb';
import { useToggle } from '../hooks/useToggle';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';

export default function Greet() {
  const [isOpen, toggleSubmenu] = useToggle(false);

  const { logOut } = useUserContext();
  const navigate = useNavigate();

  function handleLogOut() {
    logOut();
    navigate('/');
  }
  return (
    <div className="relative">
      <button
        type="button"
        className="flex flex-col items-center"
        onClick={toggleSubmenu}
      >
        <img
          className="w-16 h-16 rounded-full border-6 border-white"
          src="\src\assets\logoAG_1.svg"
          alt="logo"
        />
        <span className="text-lg">ALBERT</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 flex flex-col gap-4 p-4 bg-white rounded-md shadow-lg"
            animate={{ opacity: [0, 1], y: [-10, 0] }}
            exit={{ y: -10, opacity: 0 }}
          >
            <Button
              variant="secondary"
              className="text-xl p-2"
              onClick={handleLogOut}
              aria-label="Logout button"
            >
              <TbLogout />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

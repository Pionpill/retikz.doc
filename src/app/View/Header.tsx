import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import useLang from '@/hooks/useLang';
import useTheme from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsWechat } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { LuLanguages } from 'react-icons/lu';
import { RiEnglishInput } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router';

const Header: FC = () => {
  const { t } = useTranslation();
  const { theme, switchTheme } = useTheme();
  const { lang, switchLang } = useLang();
  const navigate = useNavigate();

  return (
    <div className="w-full p-2 flex items-center justify-between gap-4">
      <Link className="font-bold" to="/">
        {t('common.title')}
      </Link>
      <div className="flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => navigate('/doc')} className={navigationMenuTriggerStyle()}>
                {t('common.doc')}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center h-6 gap-1">
        <div>
          <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => switchTheme()}>
            {theme === 'dark' ? <Moon /> : <Sun />}
          </Button>
          <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => switchLang()}>
            {lang === 'en' ? <RiEnglishInput /> : <LuLanguages />}
          </Button>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => switchTheme()}>
            <FaGithub />
          </Button>
          <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => switchLang()}>
            <BsWechat />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

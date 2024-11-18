// hooks/settingsData.ts
import { useState, useEffect } from 'react';
import { getSettings } from "@/sanity/sanity.query";
import type { SettingsType } from '../types';

export const fetchSettingsData = () => {
  const [settingsData, setSettings] = useState<SettingsType | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();
        console.log('Fetched Settings Data =>>>> ',data)
        setSettings(data);
      } catch (err) {
      } 
    };

    fetchSettings();
  }, []);

  return { settingsData};
};
import React from 'react';
import { CheckCircle } from 'lucide-react';

function SkillList({ skill }) {
  return (
    <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      <p className="text-slate-700 dark:text-slate-300 font-medium">{skill}</p>
    </span>
  );
}

export default SkillList;
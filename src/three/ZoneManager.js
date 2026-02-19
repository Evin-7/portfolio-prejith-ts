import * as THREE from 'three';
import { HologramPanel } from './HologramPanel.js';

export class ZoneManager {
  constructor(scene, resume) {
    this.scene = scene;
    this.resume = resume;
    this.zones = [];
    this.activeZone = null;
    this._activeZoneCallback = null;
    this._buildZones();
  }

  _buildZones() {
    const r = this.resume;

    // --- ABOUT ---
    const aboutContent = [
      `## ${r.name}`,
      `-- ${r.title}`,
      '',
      r.summary,
      '',
      '## CONTACT',
      `-- Email: ${r.contact.email}`,
      `-- Phone: ${r.contact.phone}`,
    ].join('\n');

    // --- SKILLS ---
    const skillContent = ['## TECHNICAL SKILLS', ''].concat(
      r.skills.map(s => `-- ${s.name}  [${'█'.repeat(Math.round(s.level / 10))}${'░'.repeat(10 - Math.round(s.level / 10))}]  ${s.level}%`)
    ).join('\n');

    // --- PROJECTS ---
    const projContent = ['## FEATURED PROJECTS', ''].concat(
      r.projects.map(p => [
        `## ${p.name}`,
        `-- [${p.category}]`,
        p.description,
        `-- Stack: ${p.tech.join(' · ')}`,
        '',
      ].join('\n'))
    ).join('\n');

    // --- EXPERIENCE ---
    const expContent = ['## EXPERIENCE TIMELINE', ''].concat(
      r.experience.map(e => [
        `## ${e.title}`,
        `-- ${e.company}`,
        `-- Period: ${e.period}`,
        `-- Projects: ${e.projects.join(', ')}`,
        '',
      ].join('\n'))
    ).join('\n');

    // --- EDUCATION ---
    const eduContent = ['## EDUCATION', ''].concat(
      r.education.map(e => [
        `## ${e.degree}`,
        `-- ${e.institution}`,
        e.college ? `-- ${e.college}` : '',
        `-- ${e.period}`,
        '',
      ].join('\n'))
    ).join('\n');

    // --- CONTACT ---
    const contactContent = [
      '## CONTACT ME',
      '',
      `-- Email: ${r.contact.email}`,
      '',
      `-- Phone: ${r.contact.phone}`,
      '',
      `-- LinkedIn:`,
      `   ${r.contact.linkedin}`,
      '',
      '## OPEN TO',
      '-- Flutter / Mobile Development',
      '-- Full-Stack Projects',
      '-- AI Integration Work',
    ].join('\n');

    const zoneData = [
      { id: 'about', pos: { x: 0, z: -30 }, title: '[ ABOUT ME ]', content: aboutContent, color: 0x00ff88 },
      { id: 'skills', pos: { x: -30, z: 0 }, title: '[ SKILLS ]', content: skillContent, color: 0x0088ff },
      { id: 'projects', pos: { x: 30, z: 0 }, title: '[ PROJECTS ]', content: projContent, color: 0xff0066 },
      { id: 'experience', pos: { x: 0, z: 30 }, title: '[ EXPERIENCE ]', content: expContent, color: 0x8800ff },
      { id: 'contact', pos: { x: 0, z: 60 }, title: '[ CONTACT ]', content: contactContent, color: 0xffcc00 },
      { id: 'education', pos: { x: -30, z: 50 }, title: '[ EDUCATION ]', content: eduContent, color: 0x00ccff },
    ];

    zoneData.forEach(z => {
      const panel = new HologramPanel(this.scene, z.pos, z.title, z.content, z.color);
      this.zones.push({ id: z.id, pos: z.pos, radius: 14, panel, color: z.color });
    });
  }

  onZoneChange(cb) {
    this._activeZoneCallback = cb;
  }

  update(elapsed, playerPos) {
    let newActive = null;

    this.zones.forEach(zone => {
      const dx = playerPos.x - zone.pos.x;
      const dz = playerPos.z - zone.pos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < zone.radius) {
        newActive = zone;
        zone.panel.show(playerPos);
      } else {
        zone.panel.hide();
      }
      zone.panel.update(elapsed);
    });

    if (newActive?.id !== this.activeZone?.id) {
      this.activeZone = newActive;
      if (this._activeZoneCallback) {
        this._activeZoneCallback(newActive ? newActive.id : null);
      }
    }
  }
}

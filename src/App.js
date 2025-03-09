import React, { useState } from 'react';
import { 
  BookOpen, 
  FolderPlus, 
  Upload, 
  Edit, 
  Trash2, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Zap, 
  Settings, 
  PlusCircle, 
  List, 
  Grid, 
  FileText,
  Copy,
  Award,
  Eye,
  Tag,
  File,
  ArrowRight,
  X,
  Image,
  Code,
  Heading,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List as ListIcon,
  ListOrdered,
  Link,
  Unlink,
  AlertCircle,
  RotateCcw,
  RotateCw,
  Hash,
  Table,
  Info,
  HelpCircle,
  Grid as GridIcon,
  RefreshCw
} from 'lucide-react';

// TopicEditor component - Rich text editor for adding new topics
const TopicEditor = ({ onClose }) => {
  const [dragOver, setDragOver] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  
  const handleDragLeave = () => {
    setDragOver(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file drop logic here
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col">
        <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Add New Topic</h3>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {/* Title input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Topic Title</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter topic title..."
            />
          </div>
          
          {/* Rich Text Editor */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Editor Toolbar */}
            <div className="flex flex-wrap border-b border-gray-200">
              <div className="flex items-center p-2 border-b border-gray-200 w-full">
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <RotateCcw size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-2">
                  <RotateCw size={16} />
                </button>
                
                <div className="border-l border-gray-200 h-6 mx-2"></div>
                
                <div className="relative inline-block mr-1">
                  <button className="flex items-center p-1 rounded hover:bg-gray-100">
                    <Heading size={16} />
                    <ChevronDown size={14} />
                  </button>
                </div>
                
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Bold size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Italic size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Underline size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Strikethrough size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <RefreshCw size={16} />
                </button>
                
                <div className="border-l border-gray-200 h-6 mx-2"></div>
                
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <AlignLeft size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <AlignCenter size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <AlignRight size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <AlignJustify size={16} />
                </button>
                
                <div className="border-l border-gray-200 h-6 mx-2"></div>
                
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <ListIcon size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <ListOrdered size={16} />
                </button>
                
                <div className="border-l border-gray-200 h-6 mx-2"></div>
                
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Link size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Unlink size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <AlertCircle size={16} />
                </button>
              </div>
              
              <div className="flex items-center p-2 w-full">
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Hash size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Code size={16} />
                </button>
                
                <div className="border-l border-gray-200 h-6 mx-2"></div>
                
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <HelpCircle size={16} />
                </button>
                <button className="p-1 text-pink-500 rounded hover:bg-gray-100 mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Image size={16} />
                </button>
                
                <div className="border-l border-gray-200 h-6 mx-2"></div>
                
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Table size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <GridIcon size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <Info size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 mr-1">
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>
            
            {/* Editor Content Area */}
            <div className="p-4 min-h-[300px]">
              <div className="text-2xl mb-4">Test Title</div>
              <div className="mb-4">Content</div>
              <div className="bg-red-100 border-l-4 border-red-500 p-3 mb-4 rounded-r">
                <div className="flex items-center text-red-700">
                  <AlertCircle size={16} className="mr-2" />
                  Warning
                </div>
              </div>
              <div>Etc.</div>
            </div>
          </div>
          
          {/* File Drop Area */}
          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Upload Materials</label>
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center">
                <Upload size={36} className="text-gray-400 mb-3" />
                <p className="text-gray-700 mb-1">Drag and drop files here</p>
                <p className="text-gray-500 text-sm mb-3">or</p>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                  Browse Files
                </button>
                <p className="text-gray-500 text-xs mt-3">
                  Supports PDFs, Word documents, PowerPoint, images, and videos
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-end">
          <button 
            className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center">
            <Zap size={18} className="mr-2" />
            AI-ify
          </button>
        </div>
      </div>
    </div>
  );
};

const ContentManager = () => {
  // States
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTopicEditor, setShowTopicEditor] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('socratic');
  
  // Mock user tier (would come from user profile/auth)
  const userTier = 4; // 1-4 scale
  
  // Template content mapping
  const templateContent = {
    socratic: {
      title: "Socratic Dialogue",
      preview: "Create a Socratic dialogue to teach the concept of [topic]. Include questions that:\n- Start with simple, foundational questions\n- Gradually increase in complexity\n- Challenge assumptions\n- Encourage critical thinking\n- Lead to self-discovered insights"
    },
    roleplay: {
      title: "Roleplay",
      preview: "Create a roleplay scenario where a teacher and student discuss [topic]. The teacher should:\n- Take on the role of an expert in the field\n- Guide the student through common misconceptions\n- Use practical examples and metaphors\n- Provide constructive feedback\n- End with a challenging problem to solve"
    },
    simulation: {
      title: "Simulation",
      preview: "Design a step-by-step simulation of [topic] that allows students to:\n- Observe the core principles in action\n- Manipulate key variables and see results\n- Identify patterns and relationships\n- Test hypotheses in a controlled environment\n- Draw conclusions based on observed outcomes"
    },
    explanation: {
      title: "Explanation",
      preview: "Provide a clear, comprehensive explanation of [topic] that:\n- Defines all key terminology\n- Explains underlying principles\n- Uses accessible analogies and examples\n- Addresses common points of confusion\n- Includes visual descriptions where helpful\n- Builds from basic to advanced understanding"
    },
    custom: {
      title: "Custom Prompt",
      preview: ""
    }
  };
  
  // Sample data
  const units = [
    {
      id: 1,
      title: "Database Systems",
      description: "Fundamentals of database design and implementation",
      topics: [
        {
          id: 101,
          title: "Relational Database Design",
          description: "Learn about designing efficient relational databases",
          subtopics: [
            { id: 1001, title: "ER Diagrams", contentCount: 3 },
            { id: 1002, title: "Normalization", contentCount: 2 },
            { id: 1003, title: "Relational Algebra", contentCount: 4 }
          ]
        },
        {
          id: 102,
          title: "SQL Fundamentals",
          description: "Core SQL concepts and query techniques",
          subtopics: [
            { id: 1004, title: "Basic Queries", contentCount: 5 },
            { id: 1005, title: "Joins", contentCount: 3 },
            { id: 1006, title: "Aggregation", contentCount: 2 }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Computer Graphics",
      description: "Introduction to 2D and 3D graphics programming",
      topics: [
        {
          id: 201,
          title: "Vector Graphics",
          description: "Fundamentals of vector-based graphics",
          subtopics: [
            { id: 2001, title: "Coordinate Systems", contentCount: 2 },
            { id: 2002, title: "Transformations", contentCount: 4 }
          ]
        },
        {
          id: 202,
          title: "3D Rendering",
          description: "Techniques for rendering 3D scenes",
          subtopics: [
            { id: 2003, title: "Lighting Models", contentCount: 3 },
            { id: 2004, title: "Texture Mapping", contentCount: 1 }
          ]
        }
      ]
    }
  ];
  
  // Content examples for a subtopic
  const sampleContent = [
    { id: 1, title: "Introduction to ER Diagrams", type: "lecture", format: "pdf", aiProcessed: true, dateAdded: "2025-02-28" },
    { id: 2, title: "ER Diagram Exercise", type: "assignment", format: "docx", aiProcessed: false, dateAdded: "2025-03-01" },
    { id: 3, title: "Entity Relationship Examples", type: "resource", format: "pptx", aiProcessed: true, dateAdded: "2025-03-04" }
  ];
  
  // AI Models available based on tier
  const getAvailableModels = (tier) => {
    const models = [
      { id: 1, name: "Basic Content Enhancer", description: "Automatically format and structure content", availableTier: 1 },
      { id: 2, name: "Quiz Generator", description: "Create quizzes from lecture materials", availableTier: 2 },
      { id: 3, name: "Explanation Expander", description: "Generate detailed explanations for complex topics", availableTier: 2 },
      { id: 4, name: "Content Summarizer", description: "Create concise summaries at multiple levels", availableTier: 3 },
      { id: 5, name: "Claude 3.7 Sonnet", description: "Best for advanced content creation with nuanced understanding", availableTier: 3 },
      { id: 6, name: "Advanced Model Selection", description: "Choose specific AI models for each task", availableTier: 4 },
      { id: 7, name: "Parameter Tuning", description: "Fine-tune AI parameters for optimal results", availableTier: 4 }
    ];
    
    return models.filter(model => model.availableTier <= tier);
  };
  
  // Toggle topic AI panel
  const toggleTopic = (topic) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(null);
    setSelectedContent(null);
    setShowAIPanel(true);
  };
  
  // Toggle subtopic AI panel
  const toggleSubtopic = (topic, subtopic) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(subtopic);
    setSelectedContent(null);
    setShowAIPanel(true);
  };
  
  // Open topic editor
  const openTopicEditor = () => {
    setShowTopicEditor(true);
    setShowAIPanel(false);
  };
  
  // Close topic editor
  const closeTopicEditor = () => {
    setShowTopicEditor(false);
  };
  
  // Get tier badge color
  const getTierBadgeColor = (tier) => {
    switch(tier) {
      case 1: return "bg-gray-100 text-gray-800";
      case 2: return "bg-blue-100 text-blue-800";
      case 3: return "bg-purple-100 text-purple-800";
      case 4: return "bg-indigo-100 text-indigo-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  // Get the currently selected unit
  const getSelectedUnitData = () => {
    return units.find(unit => unit.id === selectedUnit) || units[0];
  };
  
  const selectedUnitData = getSelectedUnitData();
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar for units */}
      <div className="w-64 bg-indigo-900 text-white flex flex-col overflow-hidden">
        <div className="p-4 border-b border-indigo-800 flex items-center justify-between">
          <h1 className="font-bold text-xl">UniverCity</h1>
          <button className="text-indigo-300 hover:text-white">
            <Settings size={18} />
          </button>
        </div>
        
        <div className="p-4 border-b border-indigo-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-indigo-300">UNITS</h2>
            <button className="text-indigo-300 hover:text-white">
              <PlusCircle size={16} />
            </button>
          </div>
          
          <div className="space-y-1">
            {units.map(unit => (
              <button 
                key={unit.id} 
                className={`w-full text-left py-2 px-3 rounded flex items-center ${
                  selectedUnit === unit.id ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800/50'
                }`}
                onClick={() => setSelectedUnit(unit.id)}
              >
                <BookOpen size={16} className="mr-2" />
                <span>{unit.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h2 className="font-medium text-indigo-300 mb-3">Other Directories</h2>
            <div className="space-y-1">
            <button className="w-full text-left py-2 px-3 rounded text-indigo-100 hover:bg-indigo-800/50 flex items-center">
                <Upload size={16} className="mr-2" />
                <span>Home</span>
              </button>
              <button className="w-full text-left py-2 px-3 rounded text-indigo-100 hover:bg-indigo-800/50 flex items-center">
                <Zap size={16} className="mr-2" />
                <span>Course Management</span>
              </button>
              <button className="w-full text-left py-2 px-3 rounded text-indigo-100 hover:bg-indigo-800/50 flex items-center">
                <FileText size={16} className="mr-2" />
                <span>My Content</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-indigo-800">
          <div className={`px-3 py-2 rounded-lg flex items-center justify-between ${getTierBadgeColor(userTier)}`}>
            <div className="flex items-center">
              <Award size={16} className="mr-2" />
              <span className="font-medium">Tier 4 Access</span>
            </div>
            <button className="text-gray-700 hover:text-gray-900">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold">{selectedUnitData.title}</h2>
            <p className="ml-4 text-gray-500">{selectedUnitData.description}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search content..." 
                className="py-2 pl-10 pr-4 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white w-64 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-700">Unit Overview</h3>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              Edit Unit Details
            </button>
          </div>
          
          {/* Topic cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {selectedUnitData.topics.map(topic => (
              <div 
                key={topic.id} 
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Topic header */}
                <div className="border-b border-gray-100 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-medium">
                        <span className="text-gray-500 mr-2">Topic:</span>
                        {topic.title}
                      </h4>
                      <p className="text-gray-500 mt-1 text-sm">{topic.description}</p>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-indigo-600">
                        <Edit size={16} />
                      </button>
                      <button 
                        className="p-1 text-gray-400 hover:text-indigo-600"
                        onClick={() => toggleTopic(topic)}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Subtopics */}
                <div className="p-4 bg-gray-50">
                  <h5 className="text-sm font-medium text-gray-600 mb-3">Subtopics</h5>
                  <div className="space-y-2">
                    {topic.subtopics.map(subtopic => (
                      <div 
                        key={subtopic.id} 
                        className="bg-white p-3 rounded border border-gray-100 flex items-center justify-between hover:border-indigo-200 transition-all"
                      >
                        <div className="flex items-center">
                          <div className="bg-indigo-100 text-indigo-600 p-1.5 rounded mr-3">
                            <FileText size={14} />
                          </div>
                          <span>{subtopic.title}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 text-sm mr-3">{subtopic.contentCount} items</span>
                          <button 
                            className="text-indigo-600 hover:text-indigo-800"
                            onClick={() => toggleSubtopic(topic, subtopic)}
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="flex items-center text-indigo-600 hover:text-indigo-800 p-1 text-sm">
                      <PlusCircle size={14} className="mr-1" />
                      <span>Add Subtopic</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add new topic card */}
            <div 
              className="bg-gray-50 rounded-xl border border-dashed border-gray-300 hover:border-indigo-300 transition-all flex flex-col items-center justify-center p-6 cursor-pointer"
              onClick={openTopicEditor}
            >
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <PlusCircle size={24} className="text-indigo-600" />
              </div>
              <h4 className="font-medium text-gray-700">Add New Topic</h4>
              <p className="text-gray-500 text-sm text-center mt-1">Create a new topic in this unit</p>
            </div>
          </div>
        </main>
      </div>
      
      {/* AI Panel */}
      {showAIPanel && (
        <div className="w-96 border-l border-gray-200 bg-white overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium flex items-center">
              <Zap size={18} className="text-indigo-600 mr-2" />
              {selectedSubtopic ? 
                `AI Tools: ${selectedSubtopic.title}` : 
                selectedTopic ? `AI Tools: ${selectedTopic.title}` : 
                'AI Enhancement Tools'}
            </h3>
            <button 
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setShowAIPanel(false)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="p-4">
            <div className="mb-6">
              <h4 className="font-medium mb-2">Selected Item</h4>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center mb-2">
                  {selectedSubtopic ? (
                    <>
                      <div className="bg-indigo-100 text-indigo-700 p-1 mr-2 rounded">Subtopic</div>
                      <span className="font-medium">{selectedSubtopic.title}</span>
                    </>
                  ) : selectedTopic ? (
                    <>
                      <div className="bg-purple-100 text-purple-700 p-1 mr-2 rounded">Topic</div>
                      <span className="font-medium">{selectedTopic.title}</span>
                    </>
                  ) : (
                    <span className="text-gray-500">No content selected</span>
                  )}
                </div>
                {selectedTopic && (
                  <div className="text-gray-500 text-sm">
                    {selectedSubtopic ? 
                      `${selectedSubtopic.contentCount} content items available` : 
                      `${selectedTopic.subtopics.length} subtopics available`}
                  </div>
                )}
              </div>
            </div>
            
            {/* AI action based on selection */}
            {selectedTopic && (
              <>
                {userTier === 1 ? (
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center mb-6">
                    <Zap size={18} className="mr-2" />
                    {selectedSubtopic ? 'AI-ify Subtopic Content' : 'AI-ify Topic'}
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-3 rounded-lg flex flex-col items-center justify-center text-center text-sm">
                      <Eye size={18} className="mb-1" />
                      View/Edit Learning Objectives
                    </button>
                    <button className="bg-green-100 hover:bg-green-200 text-green-800 py-2 px-3 rounded-lg flex flex-col items-center justify-center text-center text-sm">
                      <Copy size={18} className="mb-1" />
                      View/Edit Content
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-lg flex flex-col items-center justify-center text-center text-sm">
                    <FileText size={18} className="mb-1" />
                    Generate Quiz
                    </button>
                    <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-2 px-3 rounded-lg flex flex-col items-center justify-center text-center text-sm">
                      <Settings size={18} className="mb-1" />
                      Custom Task
                    </button>
                  </div>
                )}
              </>
            )}
            
            {/* Tier-specific options */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Available AI Models</h4>
                <span className={`text-xs ${getTierBadgeColor(4)} px-2 py-0.5 rounded-full`}>
                  Tier 4 View
                </span>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-3">
                  <select 
                    className={`w-full border ${userTier >= 4 ? 'border-indigo-300' : 'border-gray-200 bg-gray-50'} rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-300`}
                    disabled={userTier < 4}
                  >
                    <option value="claude-3-7-sonnet">Claude 3.7 Sonnet (Anthropic)</option>
                    <option value="claude-3-opus">Claude 3 Opus (Anthropic)</option>
                    <option value="claude-3-5-sonnet">Claude 3.5 Sonnet (Anthropic)</option>
                    <option value="gpt-4o">GPT-4o (OpenAI)</option>
                    <option value="gpt-4-turbo">GPT-4 Turbo (OpenAI)</option>
                    <option value="o3-mini">O3 Mini (Mistral AI)</option>
                    <option value="llama-3">Llama 3 (Meta)</option>
                    <option value="gemini-pro">Gemini Pro (Google)</option>
                  </select>
                  
                  {userTier < 4 && (
                    <div className="mt-2 text-xs text-gray-500 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      Upgrade to Tier 4 to select specific AI models
                    </div>
                  )}
                  
                  <div className="mt-3 p-3 bg-gray-50 rounded border border-gray-200">
                    <h5 className="text-sm font-medium mb-1">Claude 3.7 Sonnet</h5>
                    <p className="text-xs text-gray-600">
                      Best for advanced content creation with nuanced understanding of educational concepts. 
                      Excellent at generating detailed explanations, socratic dialogues, and complex educational materials.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Fastest response</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Strongest reasoning</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Advanced formatting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Prompt Template Options */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Prompt Template</h4>
                <button className="text-indigo-600 text-xs hover:underline">Save Custom</button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-3 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <h5 className="font-medium text-sm">{templateContent[selectedTemplate].title}</h5>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                
                <div className="p-3">
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="template-socratic" 
                        name="template-selection" 
                        className="mr-2"
                        checked={selectedTemplate === 'socratic'}
                        onChange={() => setSelectedTemplate('socratic')}
                      />
                      <label htmlFor="template-socratic" className="text-sm">Socratic Dialogue</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="template-roleplay" 
                        name="template-selection" 
                        className="mr-2"
                        checked={selectedTemplate === 'roleplay'}
                        onChange={() => setSelectedTemplate('roleplay')}
                      />
                      <label htmlFor="template-roleplay" className="text-sm">Roleplay</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="template-simulation" 
                        name="template-selection" 
                        className="mr-2"
                        checked={selectedTemplate === 'simulation'}
                        onChange={() => setSelectedTemplate('simulation')}
                      />
                      <label htmlFor="template-simulation" className="text-sm">Simulation</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="template-explanation" 
                        name="template-selection" 
                        className="mr-2"
                        checked={selectedTemplate === 'explanation'}
                        onChange={() => setSelectedTemplate('explanation')}
                      />
                      <label htmlFor="template-explanation" className="text-sm">Explanation</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="template-custom" 
                        name="template-selection" 
                        className="mr-2"
                        checked={selectedTemplate === 'custom'}
                        onChange={() => setSelectedTemplate('custom')}
                      />
                      <label htmlFor="template-custom" className="text-sm">Custom Prompt</label>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-600">
                    <p className="mb-2 font-medium text-xs text-gray-500">PROMPT:</p>
                    <p className="whitespace-pre-line">{templateContent[selectedTemplate].preview}</p>
                  </div>
                  
                  {/* Custom prompt textarea - only appears when custom template is selected */}
                  {selectedTemplate === 'custom' && (
                    <div className="mt-3">
                      <textarea 
                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
                        rows={4}
                        placeholder="Write your custom prompt for the AI..."
                        defaultValue="Create a custom educational experience for [topic] that includes..."
                      ></textarea>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t border-gray-200">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center">
                <Zap size={18} className="mr-2" />
                Run AI Process and Update Content
              </button>
              
              {userTier >= 4 && (
                <button className="w-full mt-2 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center">
                  Save Process Configuration
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Topic Editor Modal */}
      {showTopicEditor && <TopicEditor onClose={closeTopicEditor} />}
    </div>
  );
};

export default ContentManager;
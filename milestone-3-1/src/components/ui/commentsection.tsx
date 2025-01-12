import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;

    const newCommentObj: Comment = {
      id: new Date().toISOString(),
      author: authorName,
      text: newComment,
    };

    setComments((prev) => [...prev, newCommentObj]);
    setNewComment("");
    setAuthorName("");
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setAuthorName(commentToEdit.author);
      setNewComment(commentToEdit.text);
    }
  };

  const handleSaveEditedComment = () => {
    if (!newComment.trim() || !authorName.trim() || !editingCommentId) return;

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, author: authorName, text: newComment }
          : comment
      )
    );

    setEditingCommentId(null);
    setAuthorName("");
    setNewComment("");
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 max-w-lg">
        {comments.length ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent>
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-2 text-white"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
      </div>
      <div className="mt-6">
        <Input
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="mb-2 max-w-lg"
        />
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="mb-2 max-w-lg h-20"
        />
        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="mt-4"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
